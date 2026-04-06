import { SITE } from '@/lib/site';

export type ServiceCardData = {
  icon: string;
  title: string;
  description: string;
  cta?: string;
};

export function ServiceCard({ icon, title, description, cta = 'Consultar' }: ServiceCardData) {
  return (
    <div className="card p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand/15 ring-1 ring-brand/30">
          <span className="text-xl">{icon}</span>
        </div>
        <div className="min-w-0">
          <div className="text-base font-bold text-slate-50">{title}</div>
          <p className="mt-1 text-sm text-slate-300">{description}</p>
          <a
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light"
            href={SITE.whatsappWaMe}
            target="_blank"
            rel="noreferrer"
          >
            {cta} →
          </a>
        </div>
      </div>
    </div>
  );
}

