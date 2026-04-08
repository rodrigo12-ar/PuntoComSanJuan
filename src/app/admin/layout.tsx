import type { Metadata } from 'next';
import Link from 'next/link';
import { AdminSignOutButton } from '@/components/AdminSignOutButton';
import { requireAdminUser } from '@/lib/admin-auth';

export const metadata: Metadata = {
  title: 'Admin'
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdminUser();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400">Panel</div>
            <div className="text-2xl font-extrabold tracking-tight text-white">Administración</div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <nav className="flex flex-wrap gap-2">
              <Link className="btn-outline px-4 py-2" href="/admin/dashboard">
                Dashboard
              </Link>
              <Link className="btn-outline px-4 py-2" href="/admin/posts">
                Posts
              </Link>
              <Link className="btn-outline px-4 py-2" href="/admin/services">
                Servicios
              </Link>
              <Link className="btn-outline px-4 py-2" href="/admin/banners">
                Banners
              </Link>
            </nav>
            <AdminSignOutButton />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
