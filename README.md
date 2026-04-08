# Punto Com San Juan

Sitio full-stack con Next.js App Router, TypeScript, Tailwind y Supabase para un negocio de servicio técnico informático en San Juan, Argentina.

## Requisitos

- Node.js 18 o superior
- Proyecto de Supabase

## Configuración

1. Copiá las variables de entorno:

```bash
copy .env.example .env.local
```

2. Completá en `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_EMAIL`

3. En Supabase ejecutá el SQL de [supabase/admin_setup.sql](c:\Users\yo\Desktop\puntocomsanjuan_arreglado\supabase\admin_setup.sql) para crear la tabla de métricas `page_views`.

4. Creá en Supabase Auth el usuario administrador con el mismo email que pongas en `ADMIN_EMAIL`.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Rutas

- `/` Home
- `/services`
- `/blog` y `/blog/[slug]`
- `/about`
- `/contact`
- `/admin/login`
- `/admin/dashboard`
- `/admin/posts`

## Admin

- El acceso al panel está restringido por sesión de Supabase y por `ADMIN_EMAIL`.
- Las visitas públicas se registran en `page_views`.
- El dashboard muestra métricas básicas.
- Desde `/admin/posts` podés crear publicaciones para el blog.
