import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { createAdminSupabaseClient } from '@/lib/supabase/admin';

type Payload = {
  path?: string;
  visitorId?: string;
  referrer?: string | null;
};

export async function POST(request: Request) {
  let payload: Payload = {};

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const path = typeof payload.path === 'string' ? payload.path.slice(0, 200) : '';
  const visitorId = typeof payload.visitorId === 'string' ? payload.visitorId.slice(0, 100) : '';
  const referrer = typeof payload.referrer === 'string' ? payload.referrer.slice(0, 500) : null;

  if (!path || !path.startsWith('/')) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    const headerStore = await headers();
    const userAgent = headerStore.get('user-agent')?.slice(0, 500) ?? null;
    const supabase = createAdminSupabaseClient();

    await supabase.from('page_views').insert({
      path,
      visitor_id: visitorId || null,
      referrer,
      user_agent: userAgent
    });
  } catch {
    return NextResponse.json({ ok: true }, { status: 202 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
