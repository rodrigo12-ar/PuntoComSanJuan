import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contactá a ${SITE.name} por WhatsApp para soporte informático en ${SITE.city}, Argentina.`
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Contacto</h1>
          <p className="text-slate-300">
            Contanos qué equipo tenés y qué problema aparece. Si podés, agregá fotos o capturas del error.
          </p>
          <a className="btn-primary inline-flex" href={SITE.whatsappWaMe} target="_blank" rel="noreferrer">
            Contactar por WhatsApp
          </a>

          <div className="card p-6">
            <div className="text-sm font-semibold text-slate-100">Tips para diagnóstico rápido</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>Modelo del equipo (si lo sabés).</li>
              <li>Sistema operativo (Windows/Mac/Linux).</li>
              <li>Desde cuándo ocurre y si hubo cambios recientes.</li>
              <li>Mensaje exacto de error (si aparece).</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card p-6">
            <div className="text-sm font-semibold text-slate-100">Atención</div>
            <div className="mt-2 grid gap-2 text-sm text-slate-300">
              <div>
                <span className="text-slate-200 font-semibold">Ciudad:</span> {SITE.city}, San Juan
              </div>
              <div>
                <span className="text-slate-200 font-semibold">WhatsApp:</span> {SITE.whatsappNumberE164}
              </div>
              <div>
                <span className="text-slate-200 font-semibold">Horario:</span> Lun–Sáb · 9:00–19:00
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="text-sm font-semibold text-slate-100">Formulario (opcional)</div>
            <p className="mt-2 text-sm text-slate-300">
              En esta versión el canal principal es WhatsApp. Si querés, agrego un formulario que guarde leads en Supabase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

