import Link from 'next/link';
import type { Post } from '@/lib/supabase/types';

type Props = {
  posts: Post[];
};

export function BlogPreview({ posts }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Blog</h2>
          <p className="mt-2 text-sm text-slate-300">Consejos y guías útiles para mantener tu equipo al día.</p>
        </div>
        <Link className="btn-outline hidden sm:inline-flex" href="/blog">
          Ver blog
        </Link>
      </div>

      {posts.length ? (
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.id} href={`/blog/${p.slug}`} className="card p-6 hover:border-slate-700 transition">
              <div className="text-xs text-slate-400">
                {p.created_at ? new Date(p.created_at).toLocaleDateString('es-AR') : null}
              </div>
              <div className="mt-2 text-base font-bold text-slate-50">{p.title}</div>
              <p className="mt-2 line-clamp-3 text-sm text-slate-300">
                {p.content.slice(0, 140)}{p.content.length > 140 ? '…' : ''}
              </p>
              <div className="mt-4 text-sm font-semibold text-brand">Leer más →</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-6 text-sm text-slate-400">
          Próximamente artículos con consejos de mantenimiento, seguridad y optimización.
        </div>
      )}

      <div className="mt-6 sm:hidden">
        <Link className="btn-outline w-full" href="/blog">
          Ver blog
        </Link>
      </div>
    </section>
  );
}

