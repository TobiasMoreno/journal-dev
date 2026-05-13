## Why

El journal está bien escrito pero hoy no tiene SEO básico: cuando se comparte un link en LinkedIn o WhatsApp sale como link pelado sin preview ni descripción, lo que le quita CTR y profesionalismo a algo que está escrito a buen nivel. Además, la página "Sobre Mí" declara una antigüedad ("1 año y 2 meses") que un recruiter cruza contra LinkedIn (donde figuran 2+ años en Techforb) y percibe como contradicción. Detalles menores de capitalización ("Backend engineer" vs "Backend Engineer" del portfolio) y un footer plano completan las fricciones que rompen la coherencia entre canales.

## What Changes

- Corregir la antigüedad declarada en la página `/sobre-mi`: pasar de "1 año y 2 meses" (cálculo automático actual basado en marzo 2025) a "2 años, el último en backend fintech", alineado con LinkedIn y con el portfolio. También corregir el nombre de empresa: hoy dice "Credetu" (typo) — debería decir "Techforb, trabajando en Creditú".
- Agregar meta tags globales en `index.html`: `description`, `og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- Implementar SEO dinámico por post: cada post debe inyectar su propio `<title>`, `meta[name=description]`, `og:title`, `og:description`, `og:type=article`, `article:published_time`, `article:author`, `article:tag` al navegar.
- Crear la imagen `public/og-image.png` (1200×630, oscura, minimal, "Tobias Moreno — Backend Engineer · Documentando la evolución").
- Capitalizar "Backend engineer" → "Backend Engineer" en el hero (EN y ES) para alinear con el portfolio.
- Agregar un CTA suave en el footer encima de la fila de links: "¿Te resonó algo? Hablemos."

## Capabilities

### New Capabilities
- `journal-seo`: Cubre los meta tags globales del sitio, el SEO dinámico por post (title/description/Open Graph/Twitter/article schema) y el asset `og-image.png` que se usa como fallback.
- `journal-content-alignment`: Cubre el copy de identidad (página "Sobre Mí", hero, footer) y su consistencia con la identidad madre y el portfolio hermano.

### Modified Capabilities

## Impact

- **Archivos afectados**:
  - `src/index.html` (meta tags globales, link a og-image)
  - `src/app/core/i18n/en.ts` y `es.ts` (copy de hero, sobre-mi, footer)
  - `src/app/features/about/about.html` (estructura de IDENTIDAD si hace falta tocar el binding de antigüedad)
  - `src/app/app.html` (footer CTA)
  - `public/og-image.png` (nuevo asset)
  - Nuevo `SeoService` (Angular `Meta` + `Title`) + integración en rutas de post
  - `public/data/posts.en.json` / `posts.es.json` (verificar que cada entry tenga title, description, date, tags completos)
- **Dependencias**: ninguna nueva. Usa `@angular/platform-browser` (`Meta`, `Title`) ya disponible.
- **Sin breaking changes**: solo contenido + meta tags + un servicio nuevo.
- **Validación**: pegar el link en WhatsApp Web debe mostrar preview con imagen y descripción; Lighthouse SEO ≥ 90.
