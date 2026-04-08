'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { requireAdminUser } from '@/lib/admin-auth';
import { slugify } from '@/lib/slug';
import { createAdminSupabaseClient } from '@/lib/supabase/admin';

export async function createPostAction(formData: FormData) {
  await requireAdminUser();

  const title = String(formData.get('title') ?? '').trim();
  const content = String(formData.get('content') ?? '').trim();
  const category = String(formData.get('category') ?? '').trim() || null;
  const featuredImage = String(formData.get('featured_image') ?? '').trim() || null;
  const customSlug = String(formData.get('slug') ?? '').trim();

  if (!title || !content) {
    redirect('/admin/posts?error=missing-fields');
  }

  const baseSlug = slugify(customSlug || title);

  if (!baseSlug) {
    redirect('/admin/posts?error=invalid-slug');
  }

  const supabase = createAdminSupabaseClient();

  const { data: existing } = await supabase
    .from('posts')
    .select('slug')
    .ilike('slug', `${baseSlug}%`);

  const existingSlugs = new Set((existing ?? []).map((item: any) => item.slug));
  let finalSlug = baseSlug;
  let suffix = 2;

  while (existingSlugs.has(finalSlug)) {
    finalSlug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  const { error } = await supabase.from('posts').insert({
    title,
    slug: finalSlug,
    content,
    category,
    featured_image: featuredImage
  });

  if (error) {
    redirect(`/admin/posts?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath('/blog');
  revalidatePath(`/blog/${finalSlug}`);
  revalidatePath('/admin/posts');
  revalidatePath('/');
  redirect('/admin/posts?created=1');
}
