import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

const values = [
  'Explicación simple del problema y alternativas.',
  'Presupuesto transparente.',
  'Buenas prácticas de seguridad y respaldo.',
  'Soporte post-servicio.'
] as const;

const process = [
  {
    title: 'Escuchamos el problema',
    description: 'Cada caso empieza con contexto real: síntomas, tiempos y uso del equipo.'
  },
  {
    title: 'Diagnosticamos con criterio',
    description: 'Priorizamos soluciones concretas y evitamos intervenciones innecesarias.'
  },
  {
    title: 'Cerramos con seguimiento',
    description: 'No solo resolvemos: también dejamos recomendaciones para que dure.'
  }
] as const;

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: `Conocé a ${SITE.name}. Servicio técnico informático en ${SITE.city}, Argentina.`
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <div className="section-kicker reveal-up">Nosotros</div>
          <h1 className="reveal-up reveal-up-delay-1 text-3xl font-extrabold tracking-tight md:text-4xl">
            Sobre {SITE.name}
          </h1>
          <p className="reveal-up reveal-up-delay-2 max-w-xl text-slate-600">
            Somos un servicio técnico informático enfocado en diagnósticos claros y soluciones duraderas para hogares y
            comercios en {SITE.city}.
          </p>

          <div className="card hero-panel reveal-up reveal-up-delay-3 p-6 text-slate-900">
            <div className="text-sm font-semibold text-slate-900">Nuestra promesa</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {values.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="stagger-grid grid gap-4">
          <div className="card p-6 text-slate-900">
            <div className="text-sm font-semibold text-slate-900">Zona de cobertura</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {SITE.city} y alrededores. Consultá disponibilidad para retiro, entrega o coordinación del equipo.
            </p>
          </div>

          <div className="card p-6 text-slate-900">
            <div className="text-sm font-semibold text-slate-900">Tecnología</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Trabajamos con Windows, Mac y Linux. Instalaciones, limpieza, upgrades y solución de fallas de hardware.
            </p>
          </div>

          <div className="card p-6 text-slate-900">
            <div className="text-sm font-semibold text-slate-900">Canal directo</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Priorizamos contacto rápido por WhatsApp e Instagram para que el primer intercambio ya sea útil.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-14">
        <div className="max-w-2xl">
          <div className="section-kicker reveal-up">Cómo trabajamos</div>
          <h2 className="reveal-up reveal-up-delay-1 mt-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            Un proceso simple, visible y profesional
          </h2>
        </div>

        <div className="stagger-grid mt-8 grid gap-5 md:grid-cols-3">
          {process.map((item) => (
            <div key={item.title} className="card p-6">
              <div className="text-base font-bold text-slate-900">{item.title}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
