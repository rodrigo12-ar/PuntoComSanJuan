import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-white">{BUSINESS.name}</div>
          <p className="text-sm text-slate-300">
            Servicio técnico informático en {BUSINESS.city}, {BUSINESS.country}.
          </p>
          <a
            href={BUSINESS.whatsappWaMe}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-medium"
          >
            Contactar por WhatsApp
          </a>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-white">Navegación</div>
          <ul className="space-y-1 text-sm text-slate-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-white">Horario</div>
          <p className="text-sm text-slate-300">Lunes a Sábado — 9:00 a 19:00</p>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

