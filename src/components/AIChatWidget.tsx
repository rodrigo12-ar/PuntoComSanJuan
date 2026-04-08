'use client';

import { useEffect, useMemo, useState } from 'react';
import { SITE } from '@/lib/site';
import { toWaMePrefillUrl } from '@/lib/utils';

type Device = 'Desktop computer' | 'Notebook' | 'Printer' | 'Other device';
type Problem =
  | 'Computer is slow'
  | 'Virus or malware'
  | 'Computer does not start'
  | 'Hardware problem'
  | 'Other issue';
type OS = 'Windows' | 'Mac' | 'Linux' | "I don't know";

const deviceOptions: ReadonlyArray<{ label: string; value: Device }> = [
  { label: 'Computadora de escritorio', value: 'Desktop computer' },
  { label: 'Notebook', value: 'Notebook' },
  { label: 'Impresora', value: 'Printer' },
  { label: 'Otro', value: 'Other device' },
];

const problemOptions: ReadonlyArray<{ label: string; value: Problem }> = [
  { label: 'Anda lenta', value: 'Computer is slow' },
  { label: 'Virus o malware', value: 'Virus or malware' },
  { label: 'No prende', value: 'Computer does not start' },
  { label: 'Problema de hardware', value: 'Hardware problem' },
  { label: 'Otro problema', value: 'Other issue' },
];

const osOptions: ReadonlyArray<{ label: string; value: OS }> = [
  { label: 'Windows', value: 'Windows' },
  { label: 'Mac', value: 'Mac' },
  { label: 'Linux', value: 'Linux' },
  { label: 'No lo sé', value: "I don't know" },
];

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [device, setDevice] = useState<Device | null>(null);
  const [problem, setProblem] = useState<Problem | null>(null);
  const [os, setOs] = useState<OS | null>(null);
  const [details, setDetails] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

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
              Hola, soy el asistente técnico de Punto Com. Voy a hacerte algunas preguntas para ayudarte mejor.
            </div>

            {step === 1 ? (
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-100">1. ¿Qué necesitás reparar?</div>
                <div className="grid gap-2">
                  {deviceOptions.map((option) => (
                    <button
                      key={option.value}
                      className="rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-900/60"
                      onClick={() => {
                        setDevice(option.value);
                        setStep(2);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-100">2. ¿Qué problema estás teniendo?</div>
                <div className="grid gap-2">
                  {problemOptions.map((option) => (
                    <button
                      key={option.value}
                      className="rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-900/60"
                      onClick={() => {
                        setProblem(option.value);
                        setStep(3);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-100">3. ¿Qué sistema operativo usás?</div>
                <div className="grid gap-2">
                  {osOptions.map((option) => (
                    <button
                      key={option.value}
                      className="rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-2 text-left text-sm text-slate-100 hover:bg-slate-900/60"
                      onClick={() => {
                        setOs(option.value);
                        setStep(4);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 4 ? (
              <div className="space-y-3">
                <div className="text-sm font-semibold text-slate-100">4. Describí el problema</div>
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
}
