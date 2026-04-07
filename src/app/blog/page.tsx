import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { createClient } from '@/lib/supabase/server';
import type { Post } from '@/lib/supabase/types';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Consejos de mantenimiento y seguridad informática en ${SITE.city}, Argentina.`
};

type Props = {
  searchParams: { q?: string; page?: string };
};

export default async function BlogIndexPage({ searchParams }: Props) {
  const q = searchParams.q?.trim() ?? '';
  const page = Number(searchParams.page ?? '1') || 1;
  const pageSize = 6;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const supabase = await createClient();
  let query = supabase
    .from('posts')
    .select('id,title,slug,content,category,featured_image,created_at', { count: 'exact' })
    .order('created_at', { ascending: false });

  if (q) {
    query = query.ilike('title', `%${q}%`);
  }

  const { data: posts, count } = await query.range(from, to);
  const totalPages = count ? Math.ceil(count / pageSize) : 1;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Blog</h1>
          <p className="mt-3 max-w-2xl text-slate-900">Guías y recomendaciones para tu equipo.</p>
        </div>

        <form className="card flex items-center gap-2 p-2 sm:w-[360px]" action="/blog" method="get">
          <input
            name="q"
            defaultValue={q}
            placeholder="Buscar artículos…"
            className="w-full bg-transparent px-3 py-2 text-sm text-slate-100 placeholder:text-slate-900 outline-none"
          />
          <button className="btn-primary px-4 py-2" type="submit">
            Buscar
          </button>
        </form>
      </div>

      {posts?.length ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.id} href={`/blog/${p.slug}`} className="card p-6 hover:border-slate-700 transition">
              <div className="text-xs text-slate-900">
                {p.created_at ? new Date(p.created_at).toLocaleDateString('es-AR') : null}
              </div>
              <div className="mt-2 text-base font-bold text-slate-90">{p.title}</div>
              <p className="mt-2 line-clamp-3 text-sm text-slate-900">
                {p.content.slice(0, 160)}{p.content.length > 160 ? '…' : ''}
              </p>
              <div className="mt-4 text-sm font-semibold text-brand">Leer →</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-8 text-sm text-slate-900">Todavía no hay artículos publicados.</div>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button className="btn-outline" disabled={page <= 1}>
            Anterior
          </button>
          <div className="text-sm text-slate-900">
            Página {page} de {totalPages}
          </div>
          <button className="btn-outline" disabled={page >= totalPages}>
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}

