'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BUSINESS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        
        {/* LOGO SIMPLE */}
        <Link href="/" className="text-white font-bold text-lg">
          {BUSINESS.name}
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-2">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 rounded text-sm',
                  active
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* BOTONES */}
        <div className="flex gap-2">
          <a
            href={BUSINESS.whatsappWaMe}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            WhatsApp
          </a>

          <Link href="/contact" className="btn-outline hidden sm:inline-flex">
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}

