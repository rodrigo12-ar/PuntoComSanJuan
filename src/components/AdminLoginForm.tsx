'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserSupabaseClient } from '@/lib/supabase/client';

export function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) {
        setError(authError.message);
        setLoading(false);
        return;
      }
      router.push('/admin/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err?.message ?? 'Error al iniciar sesión');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-200">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brand/60"
          required
        />
      </div>
      <div className="space-y-1">
        <label className="text-xs font-semibold text-slate-200">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none focus:border-brand/60"
          required
        />
      </div>
      {error && <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-2 text-xs text-red-200">{error}</div>}
      <button className="btn-primary w-full" type="submit" disabled={loading}>
        {loading ? 'Ingresando…' : 'Ingresar'}
      </button>
    </form>
  );
}

