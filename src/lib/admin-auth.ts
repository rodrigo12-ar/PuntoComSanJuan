import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export async function requireAdminUser() {
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!adminEmail) {
    throw new Error('Missing ADMIN_EMAIL');
  }

  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  const email = user?.email?.toLowerCase();

  if (!user || !email) {
    redirect('/admin/login');
  }

  if (email !== adminEmail) {
    redirect('/admin/login?unauthorized=1');
  }

  return user;
}
