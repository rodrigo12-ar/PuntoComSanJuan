import { SITE } from '@/lib/site';

export type BannerData = {
  title: string;
  subtitle?: string;
  active: boolean;
};

export function Banner({ title, subtitle, active }: BannerData) {
  if (!active) return null;

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-500">Promoción</div>

            <div className="mt-1 text-lg font-bold text-slate-900">
              {title}
            </div>

            {subtitle && (
              <p className="mt-1 text-sm text-slate-600">
                {subtitle}
              </p>
            )}
          </div>

          <a
            className="btn-primary"
            href={SITE.whatsappWaMe}
            target="_blank"
            rel="noreferrer"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

