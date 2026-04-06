import type { Metadata } from 'next';
import { Banner } from '@/components/Banner';
import { BlogPreview } from '@/components/BlogPreview';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { createClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: 'Servicio Técnico Informático en San Juan',
  description:
    'Reparación de computadoras, eliminación de virus, instalación de sistema y optimización. Atención en San Juan, Argentina.'
};

export default async function HomePage() {
  const supabase = await createClient();

  const { data: banners } = await supabase
    .from('banners')
    .select('id,title,subtitle,active,created_at')
    .eq('active', true)
    .order('created_at', { ascending: false })
    .limit(1);

  const { data: posts } = await supabase
    .from('posts')
    .select('id,title,slug,content,category,featured_image,created_at')
    .order('created_at', { ascending: false })
    .limit(3);

  const activeBanner = banners?.[0];

  return (
    <>
      <Hero />

      {activeBanner ? (
        <Banner
          title={activeBanner.title}
          subtitle={activeBanner.subtitle}
          active={activeBanner.active}
        />
      ) : null}

      <ServicesSection />

      <WhyChooseUs />

      <BlogPreview posts={(posts ?? []).map((p) => ({ ...p, id: String(p.id) }))} />
    </>
  );
}
