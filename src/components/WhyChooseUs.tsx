export function WhyChooseUs() {
  const items = [
    { title: 'Fast service', desc: 'Tiempos de respuesta cortos y prioridades claras.' },
    { title: 'Professional diagnostics', desc: 'Diagnóstico preciso antes de intervenir.' },
    { title: 'Affordable prices', desc: 'Presupuesto transparente y opciones por etapa.' },
    { title: 'Trusted technical support', desc: 'Soporte confiable para hogares y comercios.' }
  ] as const;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">¿Por qué elegirnos?</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {items.map((x) => (
          <div key={x.title} className="card p-6">
            <div className="text-base font-bold text-slate-50">{x.title}</div>
            <p className="mt-2 text-sm text-slate-300">{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

