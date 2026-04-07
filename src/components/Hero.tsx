import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-900 shadow-sm">
            Servicio técnico informático en {SITE.city}
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Soluciones informáticas claras, rápidas y profesionales
          </h1>

          <p className="max-w-xl text-base text-slate-900 md:text-lg">
            Reparación de PC y notebooks, limpieza, optimización, instalación de sistemas,
            soporte técnico y atención personalizada en San Juan.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={SITE.whatsappWaMe} target="_blank" rel="noreferrer">
              Pedir diagnóstico
            </a>

            <Link className="btn-outline" href="/contact">
              Ver contacto
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">Atención local</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">Respuesta rápida</span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm">Presupuesto claro</span>
          </div>
        </div>

        <div className="card p-8">
          <div className="space-y-5">
            <div>
              <div className="text-sm font-semibold text-slate-900">¿Qué resolvemos?</div>
              <p className="mt-2 text-sm text-slate-600">
                Problemas de rendimiento, formateos, virus, fallas de software, instalaciones,
                mantenimiento y soporte técnico para hogares y comercios.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '⚡', title: 'Respuesta rápida' },
                { icon: '🧠', title: 'Diagnóstico preciso' },
                { icon: '🛡️', title: 'Más seguridad' },
                { icon: '💬', title: 'Atención directa' }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="text-xl">{item.icon}</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}