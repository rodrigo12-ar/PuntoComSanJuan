import { ServiceCard, type ServiceCardData } from '@/components/ServiceCard';

const SERVICES: ServiceCardData[] = [
  {
    icon: '🛠️',
    title: 'Computer repair',
    description: 'Diagnóstico y reparación de PC y notebook. Soluciones claras y efectivas.'
  },
  {
    icon: '🧼',
    title: 'Virus removal',
    description: 'Eliminación de malware, limpieza y mejora de seguridad del sistema.'
  },
  {
    icon: '💿',
    title: 'Operating system installation',
    description: 'Instalación y configuración de Windows, drivers, programas esenciales y respaldo.'
  },
  {
    icon: '🚀',
    title: 'PC optimization',
    description: 'Optimización de arranque, performance, almacenamiento y ajustes recomendados.'
  },
  {
    icon: '🧑‍💻',
    title: 'Technical support',
    description: 'Soporte presencial o remoto para problemas de software, red e impresoras.'
  }
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Servicios</h2>
          <p className="mt-2 text-sm text-slate-300">Todo lo que necesitás para que tu equipo funcione perfecto.</p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
}

