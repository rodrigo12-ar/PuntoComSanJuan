import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { createClient } from '@/lib/supabase/server';
import type { Post } from '@/lib/supabase/types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
      const base = SITE.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/services',
    '/blog',
    '/about',
    '/contact'
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8
  }));

  try {
    const supabase = await createClient();
    const { data: posts } = await supabase
      .from('posts')
      .select('slug,created_at')
      .order('created_at', { ascending: false });

    const postRoutes: MetadataRoute.Sitemap = (posts ?? []).map((p: any) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.created_at ? new Date(p.created_at) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    }));

    return [...staticRoutes, ...postRoutes];
  } catch {
    return staticRoutes;
  }
}

