'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function getVisitorId() {
  const key = 'pcsj-visitor-id';
  const existing = window.localStorage.getItem(key);

  if (existing) {
    return existing;
  }

  const generated = crypto.randomUUID();
  window.localStorage.setItem(key, generated);
  return generated;
}

export function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin')) {
      return;
    }

    const sessionKey = `tracked:${pathname}`;
    if (window.sessionStorage.getItem(sessionKey)) {
      return;
    }

    window.sessionStorage.setItem(sessionKey, '1');

    void fetch('/api/track-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        path: pathname,
        visitorId: getVisitorId(),
        referrer: document.referrer || null
      })
    });
  }, [pathname]);

  return null;
}
