## 1. og-image asset

- [x] 1.1 Generar `public/og-image.png` — script `scripts/generate-og-image.mjs` (sharp + SVG), corre con `npm run og-image`. Output: 1200×630, 41.9 KB.
- [ ] 1.2 Verificar visualmente que se sirve en `/og-image.png` tras build/deploy.

## 2. Meta tags globales

- [x] 2.1 En `src/index.html`, agregar dentro de `<head>` los meta tags:
  - `description`
  - `og:type=website`, `og:title`, `og:description`, `og:url=https://tobias-moreno.netlify.app`, `og:image=https://tobias-moreno.netlify.app/og-image.png`
  - `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`
- [x] 2.2 Texto a usar: title "Tobias Moreno — Journal", description "Backend engineer. Documentando la evolución." (ajustar si el usuario prefiere otra variante).

## 3. SEO dinámico por post

- [x] 3.1 Crear `src/app/core/seo/seo.service.ts` con un método `setForPost(post)` que use `Title` y `Meta` de `@angular/platform-browser` para setear: `<title>`, `description`, `og:title`, `og:description`, `og:type=article`, `og:url`, `og:image`, `article:published_time`, `article:author`, `article:tag`, y los `twitter:*` equivalentes.
- [x] 3.2 Crear un método `resetToDefaults()` que restaure los valores globales (los del `index.html`).
- [x] 3.3 Integrar `SeoService` en el componente de detalle de post: llamar `setForPost` al cargar, `resetToDefaults` al destruir.
- [x] 3.4 Verificar que cada entry en `public/data/posts.en.json` y `posts.es.json` tiene `title`, `description`, `date` (ISO), y `tags` (array). Completar los que falten.

## 4. Sobre Mí — antigüedad y empresa

- [x] 4.1 En `src/app/core/i18n/es.ts`, reemplazar la oración de IDENTIDAD por: "Soy Tobias Moreno, Backend Engineer en Techforb, trabajando en Creditú — una fintech con foco en crédito digital. Vivo en Córdoba, Argentina, y vengo desarrollando software hace 2 años, el último en backend fintech."
- [x] 4.2 En `src/app/core/i18n/en.ts`, traducción equivalente en inglés. Corregir typo "Credetu" → "Creditú" y mencionar "Techforb, working on Creditú".
- [x] 4.3 Grep `Credetu` en todo el repo, asegurar que no queda ninguna ocurrencia.
- [x] 4.4 Borrar (o reescribir) el signal `experience()` y su uso en `src/app/features/about/about.html` si quedan como código muerto.

## 5. Hero — capitalización

- [x] 5.1 En `src/app/core/i18n/en.ts` y `es.ts`, cambiar "Backend engineer." → "Backend Engineer." en el copy del hero.

## 6. Footer — CTA suave

- [x] 6.1 En `src/app/app.html`, agregar entre `<p class="app-footer__text">Tobias Moreno — Backend Engineer</p>` y `<div class="app-footer__links">` una línea nueva: `<p class="app-footer__cta">¿Te resonó algo? Hablemos.</p>`.
- [x] 6.2 Estilizar `.app-footer__cta` coherente con el resto del footer (mismo color/peso o ligeramente más sutil).
- [x] 6.3 Considerar mover ese texto a una key i18n (`footer.cta`) si el sitio es bilingüe.

## 7. Validación

- [x] 7.1 `npm run build` sin errores.
- [ ] 7.2 Pegar `https://tobias-moreno.netlify.app` en WhatsApp Web → debe aparecer preview con imagen y descripción. **PENDIENTE post-deploy + og-image.png.**
- [ ] 7.3 Pegar la URL de un post → preview debe usar título y descripción del post. **PENDIENTE post-deploy.**
- [ ] 7.4 Lighthouse SEO ≥ 90 en home y en al menos un post. **PENDIENTE post-deploy.**
- [ ] 7.5 Revisión cruzada portfolio↔journal: capitalización, identidad, tono coherentes. **PENDIENTE revisión visual del usuario.**
