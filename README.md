# Claude Code Specs - journal-dev

## Contexto del proyecto

Este proyecto se llama `journal-dev`.

No es un portfolio tradicional. Es un blog personal / journal profesional para documentar mi evolución como Backend Engineer.

El objetivo es mostrar:

* aprendizajes técnicos
* decisiones profesionales
* errores reales
* proyectos personales
* objetivos de carrera
* publicaciones relacionadas a LinkedIn
* evolución hacia un perfil Backend Engineer orientado a sistemas distribuidos, resiliencia, escalabilidad y arquitectura

El sitio debe sentirse como un producto personal serio, no como un template genérico.

---

## Objetivo principal

Crear una plataforma tipo blog/journal donde los posts vivan en archivos de datos y puedan renderizarse dinámicamente.

El contenido principal debe venir desde:

```bash
data/posts.json
```

Cada post puede tener metadata como:

```json
{
  "id": "completable-future-intro",
  "title": "Mis primeros pasos con concurrencia en Java",
  "date": "2026-04-28",
  "tags": ["java", "concurrency", "backend"],
  "summary": "Aprendiendo CompletableFuture y async processing",
  "type": "learning",
  "level": "medium",
  "linkedin": "",
  "contentPath": "/content/posts/completable-future.md",
  "featured": false
}
```

---

## Secciones esperadas

El proyecto debería tener estas secciones principales:

```bash
/
```

Home con presentación clara del proyecto.

```bash
/posts
```

Listado de posts.

```bash
/posts/:id
```

Detalle de cada post.

```bash
/learnings
```

Aprendizajes técnicos.

```bash
/career
```

Reflexiones y decisiones profesionales.

```bash
/now
```

Qué estoy aprendiendo actualmente.

```bash
/about
```

Quién soy y por qué existe este proyecto.

---

## Tipos de contenido

Los posts pueden tener estos tipos:

```ts
type PostType =
  | 'learning'
  | 'career'
  | 'project'
  | 'failure'
  | 'thinking'
  | 'linkedin';
```

---

## Filtros esperados

El listado de posts debería poder filtrar por:

* tag
* tipo
* nivel
* texto de búsqueda
* destacados

---

## Identidad visual

El diseño debe ser:

* limpio
* moderno
* profesional
* minimalista
* con sensación de producto
* orientado a tecnología/backend
* sin parecer un template genérico

Debe transmitir:

> Construyendo sistemas, aprendiendo en público.

---

## Stack esperado

Usar el stack actual del repo.

Si el proyecto es Angular, respetar buenas prácticas modernas:

* standalone components
* signals si aplica
* services bien separados
* modelos tipados
* rutas claras
* componentes reutilizables
* BEM o una convención consistente para estilos
* lazy loading cuando tenga sentido

---

## Reglas de arquitectura

Separar responsabilidades:

```bash
src/
├── app/
│   ├── core/
│   ├── shared/
│   ├── features/
│   │   ├── posts/
│   │   ├── about/
│   │   ├── now/
│   │   └── home/
│   └── data-access/
```

El acceso a posts debería estar aislado en un service:

```bash
post.service.ts
```

No mezclar lógica de filtrado compleja dentro de los componentes.

---

## UX esperada

La experiencia debe permitir que alguien entienda rápido:

1. qué es journal-dev
2. quién soy
3. qué estoy aprendiendo
4. qué posts son destacados
5. cómo pienso técnicamente
6. cómo vengo evolucionando

---

## Home sugerida

La home debería incluir:

* hero con tagline
* breve descripción del proyecto
* posts destacados
* sección “Actualmente aprendiendo”
* acceso rápido a categorías
* link a LinkedIn/GitHub
* CTA a ver posts

---

## Post detail sugerido

Cada post debería mostrar:

* título
* fecha
* tags
* tipo
* nivel
* resumen
* contenido
* link a LinkedIn si existe
* posts relacionados si es simple de implementar

---

## Template de post

Cada post debería seguir esta lógica conceptual:

```md
# Qué quise aprender

# Qué hice

# Problemas que tuve

# Qué entendí

# Qué haría distinto

# Próximos pasos
```

No todos los posts tienen que tener todas las secciones, pero esa estructura debe guiar el contenido.

---

## Importante

Priorizar:

1. estructura escalable
2. código limpio
3. diseño profesional
4. contenido fácil de mantener
5. buena experiencia de lectura

Evitar:

* hardcodear posts en componentes
* hacer componentes gigantes
* usar nombres genéricos sin intención
* sobrecargar visualmente la UI
* meter features innecesarias al principio

---

## Resultado esperado

Quiero que generes una especificación inicial del proyecto con:

1. estructura de carpetas recomendada
2. modelos TypeScript necesarios
3. componentes principales
4. rutas
5. services
6. estrategia para leer posts desde JSON
7. diseño inicial de la home
8. diseño inicial del listado de posts
9. diseño inicial del detalle de post
10. próximos pasos técnicos

Después de generar la spec, proponé una implementación por etapas.
