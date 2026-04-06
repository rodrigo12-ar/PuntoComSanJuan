import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default function AdminDashboardPage() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="card p-6">
        <div className="text-sm font-semibold text-slate-200">Blog management</div>
        <div className="mt-2 text-sm text-slate-300">Crear, editar y eliminar artículos, categorías e imágenes destacadas.</div>
      </div>
      <div className="card p-6">
        <div className="text-sm font-semibold text-slate-200">Services management</div>
        <div className="mt-2 text-sm text-slate-300">Administrar servicios e imágenes.</div>
      </div>
      <div className="card p-6">
        <div className="text-sm font-semibold text-slate-200">Banner management</div>
        <div className="mt-2 text-sm text-slate-300">Editar banners de homepage (promociones activas).</div>
      </div>
      <div className="card p-6">
        <div className="text-sm font-semibold text-slate-200">Media library</div>
        <div className="mt-2 text-sm text-slate-300">Subir y administrar imágenes para posts y servicios.</div>
      </div>
    </div>
  );
}

