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
          <p className="text-slate-900">
            Contanos qué equipo tenés y qué problema aparece. Si podés, agregá fotos o capturas del error.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary inline-flex" href={SITE.whatsappWaMe} target="_blank" rel="noreferrer">
              Contactar por WhatsApp
            </a>
            <a className="btn-outline inline-flex" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>

          <div className="card p-6 text-slate-900">
            <div className="text-sm font-semibold text-slate-900">Tips para diagnóstico rápido</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-900">
              <li>Modelo del equipo, si lo sabés.</li>
              <li>Sistema operativo: Windows, Mac o Linux.</li>
              <li>Desde cuándo ocurre y si hubo cambios recientes.</li>
              <li>Mensaje exacto de error, si aparece.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card p-6 text-slate-900">
            <div className="text-sm font-semibold text-slate-900">Atención</div>
            <div className="mt-2 grid gap-2 text-sm text-slate-900">
              <div>
                <span className="font-semibold text-slate-900">Ciudad:</span> {SITE.city}, San Juan
              </div>
              <div>
                <span className="font-semibold text-slate-900">WhatsApp:</span> {SITE.whatsappNumberE164}
              </div>
              <div>
                <span className="font-semibold text-slate-900">Instagram:</span>{' '}
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-slate-400 underline-offset-4"
                >
                  @puntocomsanjuan
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-900">Horario:</span> Lun-Sáb · 9:00-19:00
              </div>
            </div>
          </div>

          <div className="card p-6 text-slate-900">
            <div className="text-sm font-semibold text-slate-900">Canales disponibles</div>
            <p className="mt-2 text-sm text-slate-900">
              WhatsApp sigue siendo el canal principal para consultas rápidas, pero ahora también tenés acceso directo a
              Instagram desde esta sección.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
