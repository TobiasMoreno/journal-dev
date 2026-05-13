## Context

El journal es un Angular 21 standalone con Vite, sin SSR (SPA pura). El contenido de los posts vive en `public/data/posts.{en,es}.json` y se renderiza en rutas dinámicas. Hoy no existe ningún servicio de SEO ni meta tags más allá de `charset` y `viewport`. Esto significa que cualquier scraper (LinkedIn, WhatsApp, Slack, Google) ve un HTML pelado.

El stack reportado en el PDF original ("Vue o Astro") es incorrecto: el repo es Angular. Eso cambia cómo se implementa el SEO dinámico: en vez de `<SEO/>` de Astro o `useHead()` de Vue/Nuxt, se usa `@angular/platform-browser` (`Meta`, `Title`) encapsulado en un `SeoService` inyectable.

## Goals / Non-Goals

**Goals:**
- Que cualquier link compartido (sitio + posts individuales) muestre preview con título, descripción e imagen.
- SEO dinámico por post sin SSR (acepta el costo: el primer paint es JS-driven; los crawlers modernos ejecutan JS, los que no, ven al menos los meta tags estáticos del `<head>` global).
- Coherencia de identidad con el portfolio (capitalización, antigüedad declarada, empresa).

**Non-Goals:**
- No introducir SSR/SSG ahora. El costo de migrar a Angular SSR/Analog/Prerender excede el problema actual; los meta tags client-side ya suficientan para LinkedIn/WhatsApp/Slack.
- No rediseñar el footer ni el hero — solo retoques de copy.
- No tocar la lógica de cálculo de antigüedad si se decide pasar a un string estático (más simple).

## Decisions

**SEO client-side vía `SeoService` en vez de SSR.** Alternativa: migrar a Angular Universal o Analog. Razón para evitar SSR: el sitio es pequeño, los previews que importan (LinkedIn/WhatsApp) leen meta tags y respetan la mayoría de los scrapers modernos. SSR es solución desproporcionada al problema.

**`og-image.png` estática única.** Alternativa: imagen dinámica por post (vía script o servicio tipo Vercel OG). Razón: la cantidad de posts es baja y el costo de generar imágenes dinámicas en build no se justifica; una imagen fallback consistente es suficiente para la fase actual.

**Reemplazar el cálculo dinámico de antigüedad por un string estático.** Hoy `experience()` es un signal computado que devuelve "1 año y 2 meses" basado en `marzo 2025 → today`. El cambio pide "2 años, el último en backend fintech" — que no es un valor que convenga calcular (mezcla rangos distintos). Más simple: hardcodear el copy en i18n y borrar el signal.

**Corregir typo "Credetu" → "Techforb, trabajando en Creditú".** Alineado con el portfolio y con LinkedIn.

**Capitalizar "Backend engineer" → "Backend Engineer".** Trivial pero el ojo lo registra al cruzar los dos sitios.

**CTA en footer.** Variante elegida: "¿Te resonó algo? Hablemos." (la más directa de las tres opciones del PDF). El usuario puede ajustarla en apply.

## Risks / Trade-offs

- [SEO client-side no es ideal para crawlers viejos] → Mitigación: meta tags globales en `index.html` estático cubren el caso baseline; por-post solo necesario para deep links.
- [La imagen og-image.png necesita coherencia visual con el journal] → Mitigación: generar con script (Puppeteer + HTML/CSS del propio journal) o exportar de Figma una vez.
- [Borrar el signal `experience()` puede romper otras vistas] → Mitigación: grep por `experience(` antes de borrar; si aparece en más de un lugar, mantener el signal pero cambiar su output.

## Migration Plan

1. Crear `og-image.png` y meta tags globales primero (mayor impacto, menor complejidad).
2. `SeoService` + integración por ruta.
3. Cambios de copy (about, hero, footer) — commits separados.
4. Validar con Facebook Sharing Debugger / WhatsApp Web / Lighthouse SEO.

## Open Questions

- ¿Confirma el usuario la variante de CTA "¿Te resonó algo? Hablemos."? (Por defecto: sí.)
- ¿Genera la `og-image.png` con script o exporta de Figma? (Por defecto: dejar como tarea manual con specs claras.)
- ¿Mantener el signal `experience()` por si vuelve a usarse, o borrarlo? (Por defecto: borrar — es código muerto si el copy es estático.)
