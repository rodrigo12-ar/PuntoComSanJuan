import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts'
};

export default function AdminPostsPage() {
  return (
    <div className="space-y-5">
      <div className="card p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-200">Posts</div>
            <div className="mt-1 text-sm text-slate-300">CRUD de artículos (pendiente de conectar a Supabase).</div>
          </div>
          <button className="btn-primary" type="button" disabled>
            Crear artículo
          </button>
        </div>
      </div>

      <div className="card p-6">
        <div className="text-sm text-slate-300">Lista vacía (placeholder).</div>
      </div>
    </div>
  );
}

