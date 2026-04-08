import type { Metadata } from 'next';
import { createPostAction } from '@/app/admin/posts/actions';
import { requireAdminUser } from '@/lib/admin-auth';
import { createAdminSupabaseClient } from '@/lib/supabase/admin';

export const metadata: Metadata = {
  title: 'Posts'
};

type Props = {
  searchParams?: { created?: string; error?: string };
};

export default async function AdminPostsPage({ searchParams }: Props) {
  await requireAdminUser();

  const created = searchParams?.created === '1';
  const error = searchParams?.error ? decodeURIComponent(searchParams.error) : null;

  let posts: Array<{
    id: string;
    title: string;
    slug: string;
    created_at: string;
    category: string | null;
  }> = [];

  let loadError: string | null = null;

  try {
    const supabase = createAdminSupabaseClient();
    const { data, error: fetchError } = await supabase
      .from('posts')
      .select('id,title,slug,created_at,category')
      .order('created_at', { ascending: false });

    if (fetchError) {
      loadError = fetchError.message;
    } else {
      posts = (data ?? []).map((item: any) => ({
        id: String(item.id),
        title: item.title,
        slug: item.slug,
        created_at: item.created_at,
        category: item.category
      }));
    }
  } catch (err: any) {
    loadError = err?.message ?? 'No se pudieron cargar los posts.';
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="card p-6">
        <div className="text-sm font-semibold text-slate-700">Nuevo post</div>
        <div className="mt-1 text-sm text-slate-500">
          Creá publicaciones para el blog sin exponer usuario ni clave en el código.
        </div>

        {created ? (
          <div className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-50 p-3 text-sm text-emerald-800">
            El post se creó correctamente.
          </div>
        ) : null}

        {error ? (
          <div className="mt-4 rounded-xl border border-red-500/40 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        <form action={createPostAction} className="mt-6 space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Título</label>
            <input
              name="title"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand/60"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Slug opcional</label>
            <input
              name="slug"
              placeholder="se genera automáticamente si lo dejás vacío"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand/60"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Categoría</label>
            <input
              name="category"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand/60"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Imagen destacada URL</label>
            <input
              name="featured_image"
              type="url"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand/60"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Contenido</label>
            <textarea
              name="content"
              rows={12}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand/60"
              required
            />
          </div>

          <button className="btn-primary" type="submit">
            Crear publicación
          </button>
        </form>
      </div>

      <div className="card p-6">
        <div className="text-sm font-semibold text-slate-700">Posts publicados</div>
        <div className="mt-1 text-sm text-slate-500">Listado actual del contenido del blog.</div>

        {loadError ? (
          <div className="mt-4 rounded-xl border border-amber-500/40 bg-amber-50 p-3 text-sm text-amber-800">
            {loadError}
          </div>
        ) : null}

        <div className="mt-6 space-y-3">
          {posts.length ? (
            posts.map((post) => (
              <div key={post.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">{post.title}</div>
                <div className="mt-1 text-xs text-slate-500">/{post.slug}</div>
                <div className="mt-2 text-xs text-slate-500">
                  {post.category ? `${post.category} · ` : ''}
                  {new Date(post.created_at).toLocaleDateString('es-AR')}
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">
              Todavía no hay posts para mostrar.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
