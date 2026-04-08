import type { Metadata } from 'next';
import { requireAdminUser } from '@/lib/admin-auth';

export const metadata: Metadata = {
  title: 'Banners'
};

export const dynamic = 'force-dynamic';

export default async function AdminBannersPage() {
  await requireAdminUser();

  return (
    <div className="space-y-5">
      <div className="card p-6">
        <div className="text-sm font-semibold text-slate-700">Banners del inicio</div>
        <div className="mt-1 text-sm text-slate-500">Edición de promociones activa pendiente de conectar a Supabase.</div>
      </div>

      <div className="card p-6">
        <div className="text-sm text-slate-500">Banner activo: placeholder.</div>
      </div>
    </div>
  );
}
