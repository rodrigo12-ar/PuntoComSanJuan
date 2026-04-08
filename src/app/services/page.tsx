import type { Metadata } from 'next';
import { ServicesSection } from '@/components/ServicesSection';
import { SITE } from '@/lib/site';

const workflow = [
  {
    title: '1. Consulta y diagnóstico',
    description: 'Nos contás el problema, revisamos síntomas y estimamos el mejor camino.'
  },
  {
    title: '2. Propuesta clara',
    description: 'Te explicamos alcance, tiempos y alternativas antes de empezar.'
  },
  {
    title: '3. Resolución y seguimiento',
    description: 'Aplicamos la solución y te dejamos recomendaciones para evitar recaídas.'
  }
] as const;

export const metadata: Metadata = {
  title: 'Servicios',
  description: `Servicios de reparación y soporte informático en ${SITE.city}, Argentina.`
};

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-3xl">
          <div className="section-kicker reveal-up">Servicios</div>
          <h1 className="reveal-up reveal-up-delay-1 mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Soporte técnico pensado para resolver sin vueltas
          </h1>
          <p className="reveal-up reveal-up-delay-2 mt-3 max-w-2xl text-slate-600">
            Soluciones para PC, notebook, impresoras y redes. Consultá por diagnóstico, tiempos estimados y mejoras de
            rendimiento.
          </p>
        </div>
      </section>

      <ServicesSection />

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card hero-panel p-6 md:p-8">
            <div className="section-kicker">Cómo trabajamos</div>
            <div className="stagger-grid mt-6 grid gap-4 md:grid-cols-3">
              {workflow.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/75 p-4">
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <div className="section-kicker">Atención inmediata</div>
            <div className="mt-4 text-lg font-bold text-slate-900">¿Necesitás ayuda ahora?</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Escribinos por WhatsApp con tu problema y coordinamos el servicio con una primera orientación rápida.
            </p>
            <a className="btn-primary mt-5" href={SITE.whatsappWaMe} target="_blank" rel="noreferrer">
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
