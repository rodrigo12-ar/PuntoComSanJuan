const items = [
  {
    title: 'Servicios rápidos',
    desc: 'Tiempos de respuesta cortos y prioridades claras para que no pierdas tiempo.'
  },
  {
    title: 'Diagnósticos profesionales',
    desc: 'Evaluación precisa antes de intervenir para evitar gastos innecesarios.'
  },
  {
    title: 'Presupuestos transparentes',
    desc: 'Te mostramos alternativas y alcance del trabajo antes de avanzar.'
  },
  {
    title: 'Soporte confiable',
    desc: 'Acompañamiento real para hogares, estudiantes, emprendedores y comercios.'
  }
] as const;

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <div className="section-kicker reveal-up">Confianza y proceso</div>
        <h2 className="reveal-up reveal-up-delay-1 mt-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
          ¿Por qué elegirnos?
        </h2>
      </div>

      <div className="stagger-grid mt-8 grid gap-5 md:grid-cols-2">
        {items.map((x) => (
          <div key={x.title} className="card p-6">
            <div className="text-base font-bold text-slate-900">{x.title}</div>
            <p className="mt-2 text-sm leading-6 text-slate-700">{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
