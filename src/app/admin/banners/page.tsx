import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Banners'
};

export default function AdminBannersPage() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <div className="text-sm font-semibold text-slate-200">Homepage banners</div>
        <div className="mt-1 text-sm text-slate-300">Editar promociones activas (pendiente de conectar a Supabase).</div>
      </div>

      <div className="card p-6">
        <div className="text-sm text-slate-300">Banner activo: (placeholder).</div>
      </div>
    </div>
  );
}

