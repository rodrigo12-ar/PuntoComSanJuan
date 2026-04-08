import type { Metadata } from 'next';
import { requireAdminUser } from '@/lib/admin-auth';

export const metadata: Metadata = {
  title: 'Servicios'
};

export const dynamic = 'force-dynamic';

export default async function AdminServicesPage() {
  await requireAdminUser();

  return (
    <div className="space-y-5">
      <div className="card p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-700">Servicios</div>
            <div className="mt-1 text-sm text-slate-500">CRUD de servicios pendiente de conectar a Supabase.</div>
          </div>
          <button className="btn-primary" type="button" disabled>
            Crear servicio
          </button>
        </div>
      </div>

      <div className="card p-6">
        <div className="text-sm text-slate-500">Lista vacía por ahora.</div>
      </div>
    </div>
  );
}
