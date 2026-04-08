import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-base font-bold text-slate-900">{BUSINESS.name}</div>
          <p className="text-sm text-slate-600">
            Servicio técnico informático en {BUSINESS.city}, {BUSINESS.country}.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href={BUSINESS.whatsappWaMe} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-base font-bold text-slate-900">Navegación</div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/services">Servicios</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">Nosotros</Link></li>
            <li><Link href="/contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-base font-bold text-slate-900">Atención</div>
          <p className="text-sm text-slate-600">Lunes a sábado · 9:00 a 19:00</p>
          <p className="text-sm text-slate-600">San Juan, Argentina</p>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
