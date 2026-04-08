import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { AdminLoginForm } from '@/components/AdminLoginForm';

export const metadata: Metadata = {
  title: 'Admin Login'
};

type Props = {
  searchParams?: { unauthorized?: string };
};

export default async function AdminLoginPage({ searchParams }: Props) {
  const supabase = await createClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const sessionEmail = session?.user?.email?.toLowerCase();

  if (session && adminEmail && sessionEmail === adminEmail) {
    redirect('/admin/dashboard');
  }

  const unauthorized = searchParams?.unauthorized === '1';

  return (
    <div className="mx-auto max-w-md">
      <div className="card p-6">
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900">Ingresar</h1>
        <p className="mt-2 text-sm text-slate-600">
          Ingresá con tu usuario de Supabase para administrar el contenido del sitio.
        </p>
        {unauthorized ? (
          <div className="mt-4 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-800">
            Esa cuenta no está autorizada para acceder al panel.
          </div>
        ) : null}
        <AdminLoginForm />
      </div>
    </div>
  );
}
