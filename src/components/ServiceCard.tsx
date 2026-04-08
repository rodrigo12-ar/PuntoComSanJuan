import { SITE } from '@/lib/site';

export type ServiceCardData = {
  icon: string;
  title: string;
  description: string;
  cta?: string;
};

export function ServiceCard({
  icon,
  title,
  description,
  cta = 'Consultar'
}: ServiceCardData) {
  return (
    <div className="card group p-6">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 shadow-sm ring-1 ring-sky-100">
          <span className="text-xl">{icon}</span>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>

          <a
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
            href={SITE.whatsappWaMe}
            target="_blank"
            rel="noreferrer"
          >
            <span>{cta}</span>
            <span className="interactive-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
