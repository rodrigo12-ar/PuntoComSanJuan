import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: `Conocé a ${SITE.name}. Servicio técnico informático en ${SITE.city}, Argentina.`
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Sobre {SITE.name}</h1>
          <p className="text-slate-300">
            Somos un servicio técnico informático enfocado en diagnósticos claros y soluciones duraderas para hogares y comercios
            en {SITE.city}.
          </p>
          <div className="card p-6">
            <div className="text-sm font-semibold text-slate-100">Nuestra promesa</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>Explicación simple del problema y alternativas.</li>
              <li>Presupuesto transparente.</li>
              <li>Buenas prácticas de seguridad y respaldo.</li>
              <li>Soporte post-servicio.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card p-6">
            <div className="text-sm font-semibold text-slate-100">Zona de cobertura</div>
            <p className="mt-2 text-sm text-slate-300">
              {SITE.city} (San Juan) y alrededores. Consultá disponibilidad para retiro/entrega.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-sm font-semibold text-slate-100">Tecnología</div>
            <p className="mt-2 text-sm text-slate-300">
              Trabajamos con Windows, Mac y Linux. Instalaciones, limpieza, upgrades y solución de fallas de hardware.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

