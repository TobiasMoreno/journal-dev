# Journal Dev - Professional Growth System

## 🧠 Identity

**Repo Name:** journal-dev  
**Tagline:** Construyendo sistemas, aprendiendo en público.

---

## 🏗️ Project Structure

```
journal-dev/
│
├── data/
│   └── posts.json
│
├── content/
│   ├── posts/
│   ├── learnings/
│   ├── career/
│   └── now/
│
├── public/
│   └── assets/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   │   └── post.service.ts
│   └── models/
│
└── README.md
```

---

## 🧩 Posts Model (JSON)

```
[
  {
    "id": "completable-future-intro",
    "title": "Mis primeros pasos con concurrencia en Java",
    "date": "2026-04-28",
    "tags": ["java", "concurrency", "backend"],
    "summary": "Aprendiendo CompletableFuture y async processing",
    "type": "learning",
    "level": "medium",
    "linkedin": "",
    "contentPath": "/content/posts/completable-future.md"
  }
]
```

---

## ⚙️ Post Creation Flow

1. Definir el **problema** que dispara el post (no el tema, el problema)
2. Escribir la **solución** y las opciones descartadas
3. Extraer el **aprendizaje** transferible
4. Crear archivo .md en /content/posts siguiendo el template
5. Agregar entrada en posts.json
6. Publicar

---

## ✍️ Post Template

**Regla base:** todo post sigue el enfoque **Problema → Solución → Aprendizaje**.
No se publica un post que no tenga las tres partes claras.

```
# 🚧 Problema
Contexto real, qué estaba mal o qué no se entendía.
Síntomas concretos (idealmente con un dato: latencia, error, tiempo, etc.).
Por qué importaba resolverlo.

# ⚙️ Solución
Qué hice / qué decidí.
Opciones que evalué y por qué descarté las otras.
Código o enfoque mínimo necesario para entenderlo.

# 💡 Aprendizaje
Qué entendí que antes no.
Qué cambia en cómo encaro problemas similares.
Qué sigo sin tener resuelto (honestidad > cierre prolijo).

# 📌 TL;DR
Problema, solución y aprendizaje en 3-4 líneas.
```

### Checklist antes de publicar

- [ ] ¿Se identifica claramente el **problema** (no solo el tema)?
- [ ] ¿La **solución** muestra trade-offs, no solo lo que funcionó?
- [ ] ¿El **aprendizaje** es transferible a otros contextos?
- [ ] ¿Hay al menos un dato, número o caso concreto?
- [ ] ¿Termina con TL;DR?

---

## 🔥 Key Sections

### /now
- Qué estás aprendiendo
- En qué estás trabajando

### /learnings
- Conceptos técnicos profundos

### /career
- Decisiones profesionales

### /failures
- Errores reales

### /thinking
- Cómo razonás

---

## 🚀 LinkedIn Strategy

1. Crear post en repo  
2. Adaptar versión corta para LinkedIn  
3. Linkear en JSON  

---

## 🎯 Positioning

- Backend Engineer  
- Enfocado en sistemas distribuidos  
- Aprendizaje continuo  
- Pensamiento en sistemas  

---

## 💥 First Posts Ideas

1. Por qué empecé a aprender concurrencia en Java  
2. Mis primeros errores usando async  
3. NestJS vs Spring Boot  
4. Qué significa software escalable  
5. Cómo estructuro mi crecimiento  

---

## 🧭 Next Steps

1. Crear repo  
2. Crear estructura  
3. Crear posts.json  
4. Escribir primer post  

---

## 🧠 Vision

Este proyecto no es un portfolio.  
Es un sistema vivo que documenta tu evolución como ingeniero.

Cada post es una unidad de aprendizaje con la misma forma:
**Problema → Solución → Aprendizaje.**
Esa estructura es lo que separa un journal de un blog de tutoriales.

