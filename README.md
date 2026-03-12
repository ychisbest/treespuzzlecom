# Escala6x1.net

Sitio editorial en Astro orientado a SEO sobre jornada laboral 6x1 en Brasil, con arquitectura de contenidos tipo `pillar + cluster`, páginas legales y preparación para AdSense.

## Stack

- Astro 5
- Tailwind CSS 4
- @astrojs/sitemap

## Estructura principal

- `/` Home (hub principal)
- `/guia-escala-6x1/` Página pilar
- `/derechos-laborales-escala-6x1/` Cluster: derechos
- `/fin-escala-6x1-reforma-laboral/` Cluster: reforma
- `/calculadora-horas-extras-6x1/` Recurso: herramienta interactiva
- `/faq-escala-6x1/` FAQ dedicada
- `/blog/` Índice editorial
- `/about/`, `/contact/`, `/privacy-policy/`, `/terms-of-service/`, `/disclaimer/`

## SEO y cumplimiento implementados

- Metadatos por página (title, description, canonical, OG, Twitter)
- Open Graph con imagen local (`/og-image.svg`)
- JSON-LD (Organization, WebPage y schemas por tipo de página)
- Sitemap XML automático con `@astrojs/sitemap`
- `robots.txt` en `public/robots.txt`
- `ads.txt` en `public/ads.txt`
- Zonas de anuncio de AdSense preconfiguradas como placeholder en páginas de contenido
- Script de AdSense desactivado por defecto en páginas legales mediante layout

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Nota editorial

El sitio es informativo y no reemplaza asesoría legal profesional.
