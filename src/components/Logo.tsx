import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand to-brand-light shadow-soft" aria-hidden />
      <div className="leading-tight">
        <div className="text-sm font-semibold text-white">{BUSINESS.name}</div>
        <div className="text-xs text-slate-300">Servicio técnico informático</div>
      </div>
    </Link>
  );
}

