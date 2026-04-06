'use client';

import { useRouter } from 'next/navigation';
import { createBrowserSupabaseClient } from '@/lib/supabase/client';

export function AdminSignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createBrowserSupabaseClient();
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <button className="btn-outline px-4 py-2" type="button" onClick={handleSignOut}>
      Cerrar sesión
    </button>
  );
}

