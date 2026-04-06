# Punto Com San Juan

Full-stack website (Next.js App Router + TypeScript + Tailwind + Supabase) para un negocio de servicio técnico informático en San Juan, Argentina.

## Requisitos

- Node.js (recomendado 18+)
- Cuenta y proyecto en Supabase

## Configuración

1. Copiá variables de entorno:

```bash
copy .env.example .env.local
```

2. Completá en `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Scripts

```bash
npm install
npm run dev
```

## Rutas

- `/` Home
- `/services`
- `/blog` y `/blog/[slug]`
- `/about`
- `/contact`
- `/admin/*` (scaffold)

