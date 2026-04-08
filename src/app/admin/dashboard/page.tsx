import type { Metadata } from 'next';
import { requireAdminUser } from '@/lib/admin-auth';
import { createAdminSupabaseClient } from '@/lib/supabase/admin';

export const metadata: Metadata = {
  title: 'Dashboard'
};

type PageViewRow = {
  path: string;
  visitor_id: string | null;
  created_at: string;
};

export default async function AdminDashboardPage() {
  await requireAdminUser();

  let totalVisits = 0;
  let visitsToday = 0;
  let uniqueVisitors = 0;
  let postsCount = 0;
  let topPaths: Array<{ path: string; visits: number }> = [];
  let metricsError: string | null = null;

  try {
    const supabase = createAdminSupabaseClient();
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const [{ count: totalViewsCount }, { count: todayViewsCount }, { count: postsTotal }, recentViewsResult] =
      await Promise.all([
        supabase.from('page_views').select('*', { count: 'exact', head: true }),
        supabase.from('page_views').select('*', { count: 'exact', head: true }).gte('created_at', todayStart.toISOString()),
        supabase.from('posts').select('*', { count: 'exact', head: true }),
        supabase.from('page_views').select('path,visitor_id,created_at').order('created_at', { ascending: false }).limit(500)
      ]);

    totalVisits = totalViewsCount ?? 0;
    visitsToday = todayViewsCount ?? 0;
    postsCount = postsTotal ?? 0;

    if (recentViewsResult.error) {
      throw recentViewsResult.error;
    }

    const recentViews = (recentViewsResult.data ?? []) as PageViewRow[];
    uniqueVisitors = new Set(recentViews.map((item) => item.visitor_id).filter(Boolean)).size;

    const pathCounter = new Map<string, number>();
    for (const view of recentViews) {
      pathCounter.set(view.path, (pathCounter.get(view.path) ?? 0) + 1);
    }

    topPaths = Array.from(pathCounter.entries())
      .map(([path, visits]) => ({ path, visits }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 5);
  } catch (err: any) {
    metricsError = err?.message ?? 'No se pudieron cargar las métricas.';
  }

  const missingViewsTable = metricsError?.includes("Could not find the table 'public.page_views'");

  return (
    <div className="space-y-5">
      {metricsError ? (
        <div className="rounded-2xl border border-amber-400/50 bg-amber-50 p-4 text-sm text-amber-900">
          <div className="font-semibold">No se pudieron cargar las métricas.</div>
          {missingViewsTable ? (
            <div className="mt-2">
              Falta crear la tabla <code>page_views</code> en Supabase. Ejecutá el script
              <code className="ml-1">supabase/admin_setup.sql</code> en el SQL Editor y luego recargá esta pantalla.
            </div>
          ) : (
            <div className="mt-2">
              Revisá que estén configuradas <code>SUPABASE_SERVICE_ROLE_KEY</code> y <code>ADMIN_EMAIL</code>.
            </div>
          )}
          <div className="mt-2 text-amber-800">{metricsError}</div>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="card p-6">
          <div className="text-sm font-semibold text-slate-700">Visitas totales</div>
          <div className="mt-3 text-3xl font-extrabold text-slate-900">{totalVisits}</div>
        </div>
        <div className="card p-6">
          <div className="text-sm font-semibold text-slate-700">Visitas hoy</div>
          <div className="mt-3 text-3xl font-extrabold text-slate-900">{visitsToday}</div>
        </div>
        <div className="card p-6">
          <div className="text-sm font-semibold text-slate-700">Visitantes recientes</div>
          <div className="mt-3 text-3xl font-extrabold text-slate-900">{uniqueVisitors}</div>
          <div className="mt-2 text-xs text-slate-500">Basado en las últimas 500 visitas registradas.</div>
        </div>
        <div className="card p-6">
          <div className="text-sm font-semibold text-slate-700">Posts publicados</div>
          <div className="mt-3 text-3xl font-extrabold text-slate-900">{postsCount}</div>
        </div>
      </div>

      <div className="card p-6">
        <div className="text-sm font-semibold text-slate-700">Páginas más visitadas</div>
        <div className="mt-1 text-sm text-slate-500">Resumen de las rutas con más actividad reciente.</div>

        <div className="mt-6 space-y-3">
          {topPaths.length ? (
            topPaths.map((item) => (
              <div key={item.path} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm text-slate-900">{item.path}</div>
                <div className="text-sm font-semibold text-slate-700">{item.visits} visitas</div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">
              Todavía no hay suficientes visitas registradas.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
