---
name: add-post
description: Add a new post to the journal. Creates the JSON entries in both languages and adds translations when needed.
license: MIT
metadata:
  author: Tobias Moreno
  version: "1.1"
---

Add a new post to the journal.

**Input**: Post content (title, date, tags, type, level, summary, sections). If not provided, prompt user for required fields.

**Steps**

1. **Gather post data (Post Creation Flow)**
   - Ask user for: title, date (YYYY-MM-DD), tags (array), type (learning|career|project|failure|thinking|linkedin), level (intro|medium|deep), summary, sections (array with heading + body)
   - Required: title, date (YYYY-MM-DD), tags, type, level, summary, **sections with: Problema, Solución, Aprendizaje, TL;DR**
   - Optional: featured (boolean), linkedin (URL)
   - **ID format**: kebab-case title (e.g., "mi-primer-post")

2. **Create JSON entries**
   - Add entry to `public/data/posts.es.json` with Spanish content
   - Add entry to `public/data/posts.en.json` with English content
   - Use existing post as template to match structure

3. **Add translations (if needed)**
   - If post uses text from /now section content, add to `src/app/core/i18n/en.ts` and `src/app/core/i18n/es.ts`
   - Update the "updated" date in both files to current month/year

4. **Verify Post Template Structure (Problema → Solución → Aprendizaje)**
   - **Problema**: Contexto real, qué estaba mal o qué no se entendía. Síntomas concretos (idealmente con un dato: latencia, error, tiempo, etc.). Por qué importaba resolverlo.
   - **Solución**: Qué hice / qué decidí. Opciones que evalué y por qué descarté las otras. Código o enfoque mínimo necesario para entenderlo.
   - **Aprendizaje**: Qué entendí que antes no. Qué cambia en cómo encaro problemas similares. Qué sigo sin tener resuelto (honestidad > cierre prolijo).
   - **TL;DR**: Problema, solución y aprendizaje en 3-4 líneas.

5. **Final checklist before publishing**
   - [ ] ¿Se identifica claramente el **problema** (no solo el tema)?
   - [ ] ¿La **solución** muestra trade-offs, no solo lo que funcionó?
   - [ ] ¿El **aprendizaje** es transferible a otros contextos?
   - [ ] ¿Hay al menos un dato, número o caso concreto?
   - [ ] ¿Termina con TL;DR?

6. **Build and verify**
   - Run build to confirm no errors
   - Verify both JSON files have the new post
   - Verify i18n files updated if changed

**Files to modify**
- `public/data/posts.es.json`
- `public/data/posts.en.json`
- (optional) `src/app/core/i18n/en.ts`
- (optional) `src/app/core/i18n/es.ts`

**Post model reference** (src/app/core/models/post.model.ts):
```typescript
interface Post {
  id: string;
  title: string;
  date: string;           // YYYY-MM-DD
  tags: string[];          // e.g., ["career", "growth"]
  type: PostType;          // learning | career | project | failure | thinking | linkedin
  level: PostLevel;       // intro | medium | deep
  summary: string;        // 1-2 sentences
  featured?: boolean;
  linkedin?: string;
  sections?: PostSection[];
}

interface PostSection {
  heading: string;
  body: string;           // Supports \n for line breaks
  image?: string;
}
```

**Typical section headings**
- Problema / Problem
- Solución / Solution
- Aprendizaje / Learning
- TL;DR