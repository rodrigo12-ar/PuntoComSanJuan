import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { AdminLoginForm } from '@/components/AdminLoginForm';

export const metadata: Metadata = {
  title: 'Admin Login'
};

export default async function AdminLoginPage() {
  const supabase = await createClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/admin/dashboard');
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="card p-6">
        <h1 className="text-xl font-extrabold tracking-tight">Ingresar</h1>
        <p className="mt-2 text-sm text-slate-300">
          Ingresá con tu usuario de Supabase (email y contraseña) para administrar el contenido.
        </p>
        <AdminLoginForm />
      </div>
    </div>
  );
}
