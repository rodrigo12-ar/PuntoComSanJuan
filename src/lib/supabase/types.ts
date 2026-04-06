export type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string | null;
  featured_image: string | null;
  created_at: string;
};

export type BannerRow = {
  id: string;
  title: string;
  image: string | null;
  active: boolean;
};

