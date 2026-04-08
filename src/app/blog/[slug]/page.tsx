import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { createClient } from '@/lib/supabase/server';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('posts')
    .select('title,slug,category,featured_image,created_at')
    .eq('slug', params.slug)
    .maybeSingle();

  const title = data?.title ?? params.slug.replace(/-/g, ' ');
  const description = `Artículo del blog de ${SITE.name} sobre mantenimiento y reparación de equipos en ${SITE.city}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      locale: SITE.locale,
      url: `${SITE.url}/blog/${params.slug}`,
      images: data?.featured_image ? [{ url: data.featured_image }] : undefined
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const supabase = await createClient();

  const { data: post } = await supabase
    .from('posts')
    .select('id,title,slug,content,category,featured_image,created_at')
    .eq('slug', params.slug)
    .maybeSingle();

  if (!post) notFound();

  const { data: related } = await supabase
    .from('posts')
    .select('id,title,slug')
    .neq('id', post.id)
    .order('created_at', { ascending: false })
    .limit(4);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <header className="space-y-3">
        <div className="text-sm text-slate-300">
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>{' '}
          / <span className="text-slate-200">{post.title}</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{post.title}</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-300">
          <span>Por Punto Com San Juan</span>
          <span>·</span>
          <time dateTime={post.created_at}>{new Date(post.created_at).toLocaleDateString('es-AR')}</time>
        </div>
      </header>

      {post.featured_image && (
        <div className="card mt-8 overflow-hidden">
          <div className="relative aspect-[16/9]">
            <Image src={post.featured_image} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      )}

      <div className="prose prose-invert mt-8 max-w-none whitespace-pre-wrap">
        <p>{post.content}</p>
      </div>

      <div className="card mt-10 p-6 text-slate-900">
        <div className="text-base font-bold text-slate-900">¿Querés que lo revisemos?</div>
        <p className="mt-2 text-sm text-slate-900">
          Enviá tu consulta por WhatsApp y coordinamos diagnóstico en {SITE.city}.
        </p>
        <a className="btn-primary mt-5" href={SITE.whatsappWaMe} target="_blank" rel="noreferrer">
          Contactar por WhatsApp
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-extrabold tracking-tight">Artículos relacionados</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {related?.map((x: any) => (
            <Link
              key={x.id}
              href={`/blog/${x.slug}`}
              className="card p-5 text-slate-900 transition hover:border-slate-700"
            >
              <div className="text-sm font-bold text-slate-900">{x.title}</div>
              <div className="mt-2 text-sm font-semibold text-slate-900">Leer →</div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
