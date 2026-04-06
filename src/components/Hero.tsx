import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-32 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute -bottom-48 right-0 h-96 w-[700px] rounded-full bg-sky-400/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-900/40 px-3 py-1 text-xs text-slate-200">
            Servicio técnico informático en {SITE.city}
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl text-brand">
            Servicio Técnico Informático en {SITE.city}
          </h1>
          <p className="text-base text-slate-300 md:text-lg">
            Reparación de computadoras, eliminación de virus y optimización de equipos.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" href="/contact">
              Solicitar soporte
            </Link>
            <a className="btn-outline" href={SITE.whatsappWaMe} target="_blank" rel="noreferrer">
              Contactar por WhatsApp
            </a>
          </div>
          <p className="text-xs text-slate-600">
            Diagnóstico profesional · Respuesta rápida · Atención local
          </p>
        </div>

        <div className="card p-6 md:p-8">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="text-sm font-semibold text-slate-100">¿Qué hacemos?</div>
              <div className="text-sm text-slate-300">
                Mantenimiento, reparaciones, instalaciones y soporte. Armamos un plan de solución claro antes de intervenir.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: '⚡', t: 'Rápido' },
                { k: '🧠', t: 'Diagnóstico' },
                { k: '🛡️', t: 'Seguridad' },
                { k: '💬', t: 'Soporte' }
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-slate-200 bg-slate-950/40 p-3">
                  <div className="text-lg">{x.k}</div>
                  <div className="text-sm font-semibold text-slate-100">{x.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

