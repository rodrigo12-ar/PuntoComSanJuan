import type { Metadata } from 'next';
import { ServicesSection } from '@/components/ServicesSection';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicios',
  description: `Servicios de reparación y soporte informático en ${SITE.city}, Argentina.`
};

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Servicios</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Soluciones para PC, notebook, impresoras y redes. Consultá por diagnóstico y tiempos estimados.
        </p>
      </section>
      <ServicesSection />
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="card p-6 md:p-8">
          <div className="text-lg font-bold">¿Necesitás ayuda ahora?</div>
          <p className="mt-2 text-sm text-slate-300">
            Escribinos por WhatsApp con tu problema y coordinamos el servicio.
          </p>
          <a className="btn-primary mt-5" href={SITE.whatsappWaMe} target="_blank" rel="noreferrer">
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

