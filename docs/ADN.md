# ADN — Guía Práctica para Product Developers

## 🎯 Propósito

Este documento resume los principios clave del ADN de Mercado Libre y cómo aplicarlos en el día a día como desarrollador orientado a producto.

No es un listado de valores abstractos, sino una guía práctica para:

* tomar decisiones técnicas
* comunicar impacto
* construir sistemas reales
* alinearse con equipos de alto rendimiento

---

# 🚀 Principios Clave

## 1. 🔄 Beta continuo

Nada está terminado. Todo puede mejorar.

### 💡 Qué significa en la práctica

* Iterar sobre soluciones basadas en métricas
* Aprender del comportamiento en producción
* Reducir feedback loops
* Corregir rápido, no perfecto

### 🧠 Cómo se ve en un dev

* Mejora código existente, no solo crea nuevo
* Instrumenta logs/metrics antes de escalar
* Prefiere soluciones evolutivas vs rígidas

---

## 2. 🎯 Creamos valor para el usuario

El código no es el objetivo. El impacto sí.

### 💡 Qué significa

* Cada decisión técnica debe mejorar la experiencia
* Performance = UX
* Simplicidad = menos fricción

### 🧠 Cómo se ve en un dev

* Prioriza endpoints críticos
* Optimiza latencias reales (no teóricas)
* Piensa en flujos de usuario, no solo en features

---

## 3. ⚡ Emprendemos tomando riesgos

No hay innovación sin incertidumbre.

### 💡 Qué significa

* Probar soluciones nuevas
* Tomar decisiones con información incompleta
* Asumir responsabilidad

### 🧠 Cómo se ve en un dev

* Propone mejoras, no solo ejecuta tickets
* Evalúa trade-offs (performance vs complejidad)
* No espera “la solución perfecta”

---

## 4. 🧩 Ejecutamos con excelencia

Calidad + simplicidad > complejidad innecesaria

### 💡 Qué significa

* Código mantenible
* Sistemas escalables
* Soluciones claras

### 🧠 Cómo se ve en un dev

* Usa patrones cuando aportan valor (no por moda)
* Diseña pensando en evolución
* Evita sobreingeniería

---

## 5. 🤝 Competimos en equipo para ganar

Alto rendimiento, pero colaborativo.

### 💡 Qué significa

* Compartir conocimiento
* Revisar código con criterio
* Alinear decisiones

### 🧠 Cómo se ve en un dev

* Hace PRs claros
* Da feedback útil
* Documenta decisiones

---

## 6. 🔥 Damos el máximo (y disfrutamos el proceso)

Intensidad con sentido.

### 💡 Qué significa

* Compromiso real con el producto
* Energía en resolver problemas complejos

### 🧠 Cómo se ve en un dev

* Se involucra en el problema, no solo en la solución
* Entiende el negocio
* Tiene ownership

---

# 🧠 Product Developer Mindset

Un Product Developer no solo escribe código.

### 🔑 Características clave:

* Entiende el problema antes que la solución
* Piensa en impacto de negocio
* Diseña sistemas, no solo features
* Itera con datos (logs, métricas, comportamiento)
* Tiene ownership sobre lo que construye

---

# 🧰 Traducción a decisiones técnicas

## 🏗️ Arquitectura

* Microservicios cuando agregan valor
* Desacoplamiento (asincronía, colas)
* Evolución progresiva (no big bang)

## ⚡ Performance

* Medir antes de optimizar
* Foco en endpoints críticos
* Reducir latencia en integraciones externas

## 🛡️ Resiliencia

* Timeouts
* Retries
* Fallbacks
* Manejo de errores explícito

## 🔍 Observabilidad

* Logs estructurados
* Métricas clave (latencia, errores)
* Trazabilidad de requests

## 🧪 Calidad

* Tests que validen comportamiento
* Edge cases definidos antes de codear
* Validaciones claras

---

# 🤖 IA en el flujo de desarrollo (alineado a ADN)

Uso de IA como herramienta, no como reemplazo.

## 🔄 Flujo sugerido (SDD + agentes)

* **Explore:** entender el problema
* **Propose:** definir solución (contratos, escenarios)
* **Apply:** implementar
* **Archive:** documentar y mejorar

### 🎯 Objetivo

* Mejor calidad antes de implementar
* Menos errores en producción
* Mejor entendimiento del problema

---

# 🧪 Cómo aplicar esto en tu CV

En lugar de decir:
❌ “soy proactivo”

Decir:
✔ “Itero soluciones a partir de métricas en producción”

---

# 🎤 Cómo aplicarlo en entrevistas

En lugar de:
❌ “optimicé código”

Decir:
✔ “Reducí la latencia de un endpoint crítico mejorando la experiencia del usuario”

---

# 🧭 Checklist personal (rápido)

Antes de cerrar una solución:

* ¿Esto mejora la experiencia del usuario?
* ¿Es simple y mantenible?
* ¿Está instrumentado para medir?
* ¿Qué pasa si falla?
* ¿Se puede evolucionar fácil?

---

# 🚀 Resumen

El ADN no es:

* escribir código
* usar tecnologías modernas

Es:
👉 entender problemas
👉 generar impacto
👉 iterar constantemente
👉 construir sistemas que evolucionen

---
