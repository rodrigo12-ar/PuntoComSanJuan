'use client';

import { useMemo, useState, useEffect } from 'react';
import { SITE } from '@/lib/site';
import { toWaMePrefillUrl } from '@/lib/utils';

type Device = 'Desktop computer' | 'Notebook' | 'Printer' | 'Other device';
type Problem = 'Computer is slow' | 'Virus or malware' | 'Computer does not start' | 'Hardware problem' | 'Other issue';
type OS = 'Windows' | 'Mac' | 'Linux' | "I don't know";

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [device, setDevice] = useState<Device | null>(null);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [os, setOs] = useState<OS | null>(null);
  const [details, setDetails] = useState('');

  const summary = useMemo(() => {
    const d = device ?? 'un equipo';
    const o = os ?? 'un sistema desconocido';
    const p = problem ?? 'un problema';
    const extra = details.trim();
    const base = `Hola, tengo ${d.toLowerCase()} con ${o} y ${p.toLowerCase()}.`;
    return extra ? `${base} ${extra}` : base;
  }, [device, os, problem, details]);

  const waUrl = useMemo(() => toWaMePrefillUrl(SITE.whatsappWaMe, summary), [summary]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-soft">
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <div className="min-w-0">
              <div className="text-sm font-extrabold">{SITE.name}</div>
              <div className="text-xs text-slate-300">Asistente técnico</div>
            </div>
            <button
              className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-200 hover:bg-slate-900"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
            >
              Cerrar
            </button>
          </div>

          <div className="max-h-[65vh] space-y-4 overflow-auto px-4 py-4">
            <div className="rounded-2xl bg-slate-900/60 p-3 text-sm text-slate-100">
              Hola 👋 soy el asistente técnico de Punto Com. Voy a hacerte algunas preguntas para ayudarte mejor.
            </div>

            {step === 1 ? (
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-100">1. What device needs repair?</div>
                <div className="grid gap-2">
                  {(['Desktop computer', 'Notebook', 'Printer', 'Other device'] as const).map((x) => (
                    <button
                      key={x}
                      className="rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-900/60"
                      onClick={() => {
                        setDevice(x);
                        setStep(2);
                      }}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-100">2. What problem are you experiencing?</div>
                <div className="grid gap-2">
                  {(
                    [
                      'Computer is slow',
                      'Virus or malware',
                      'Computer does not start',
                      'Hardware problem',
                      'Other issue'
                    ] as const
                  ).map((x) => (
                    <button
                      key={x}
                      className="rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-900/60"
                      onClick={() => {
                        setProblem(x);
                        setStep(3);
                      }}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-100">3. What operating system are you using?</div>
                <div className="grid gap-2">
                  {(['Windows', 'Mac', 'Linux', "I don't know"] as const).map((x) => (
                    <button
                      key={x}
                      className="rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-900/60"
                      onClick={() => {
                        setOs(x);
                        setStep(4);
                      }}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 4 ? (
              <div className="space-y-3">
                <div className="text-sm font-semibold text-slate-100">4. Describe the problem</div>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={3}
                  placeholder="Contame qué pasa, desde cuándo, mensajes de error, etc."
                  className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-brand/60"
                />

                <div className="rounded-2xl bg-slate-900/60 p-3 text-sm text-slate-100">
                  <div className="text-xs font-semibold text-slate-200">Resumen generado</div>
                  <div className="mt-1 text-slate-200">{summary}</div>
                </div>

                <a className="btn-primary w-full" href={waUrl} target="_blank" rel="noreferrer">
                  Enviar diagnóstico por WhatsApp
                </a>

                <button
                  className="btn-outline w-full"
                  onClick={() => {
                    setStep(1);
                    setDevice(null);
                    setProblem(null);
                    setOs(null);
                    setDetails('');
                  }}
                >
                  Reiniciar
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {!open ? (
        <button
          className="btn-primary shadow-soft"
          onClick={() => setOpen(true)}
          aria-label="Abrir asistente técnico"
        >
          Asistente
        </button>
      ) : null}
    </div>
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1200); // 1.2 segundos (queda más natural)
  
    return () => clearTimeout(timer);
  }, []);
}

