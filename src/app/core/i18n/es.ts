import { Translations } from './translations.type';

export const es: Translations = {
  nav: {
    posts: 'Posts',
    now: 'Hoy',
    about: 'Sobre Mí',
  },
  footer: {
    role: 'Backend Engineer',
  },
  home: {
    hero: {
      titleLine1: 'Backend engineer.',
      titleLine2: 'Documentando la evolución.',
      sub: 'Aprendizajes técnicos, decisiones profesionales y errores reales. Todo en público, todo sin filtro.',
    },
    posts: {
      heading: 'Posteos',
      loading: 'Cargando posts…',
      error: 'No pude cargar los posts.',
      allPosts: 'Todos los posts →',
    },
  },
  postList: {
    title: 'Posts',
    sub: 'Aprendizajes, decisiones y reflexiones técnicas.',
    loading: 'Cargando posts…',
    error: 'No pude cargar los posts.',
    pagination: {
      prev: '← Anterior',
      next: 'Siguiente →',
      pageOf: (current: number, total: number) => `Página ${current} de ${total}`,
    },
  },
  postDetail: {
    back: '← Todos los posts',
    loading: 'Cargando…',
    error: 'No pude cargar este post.',
    noContent: 'Contenido en preparación.',
    notFound: 'Post no encontrado.',
    viewLinkedIn: 'Ver versión en LinkedIn →',
  },
  about: {
    title: 'About',
    sub: 'Quién soy, cómo trabajo, qué busco. Sin clichés.',
    identity: {
      heading: 'Identidad',
      p1before: 'Soy Tobias Moreno, Backend Engineer en',
      p1after: ', una fintech con foco en crédito digital. Vivo en Córdoba, Argentina, y vengo desarrollando software hace',
      p2: 'Hoy trabajo con Java, Spring Boot y NestJS, en sistemas que mueven dinero real para gente real. Eso ordena prioridades rápido: lo que rompe importa más que lo que se ve lindo en un demo.',
    },
    howIWork: {
      heading: 'Cómo trabajo',
      card1title: 'Software es decisiones, no código.',
      card1body:
        'Casi todos los problemas serios que vi en producción vinieron de una decisión chica que nadie discutió: un default mal elegido, un timeout que no se conversó, una abstracción que se metió "por las dudas". Por eso el código que más respeto es el que tiene un porqué visible.',
      card2title: 'Mejor honesto que prolijo.',
      card2body:
        'Hay cosas que todavía no domino bien — concurrencia avanzada es la que más estoy tratando de entender hoy. Esa lista la actualizo seguido y no me molesta mostrarla: me parece más útil para un equipo saber qué no sé, que pretender un perfil cerrado.',
      card3title: 'Aprender en público.',
      card3body:
        'Este journal existe porque escribir lo que aprendo me obliga a entenderlo dos veces. Lo hago también para que alguien que viene atrás no tenga que tropezar con los mismos errores.',
      card4title: 'Pragmatismo sobre dogma.',
      card4body:
        'Microservicios cuando duele no tenerlos. Tests cuando el costo de romper supera el costo de escribirlos. Reescribir cuando la deuda técnica empezó a frenar al equipo, no antes. La ingeniería que defiendo es la que se mide en consecuencias, no en estética.',
    },
    stack: {
      heading: 'Stack actual',
      languages: 'Lenguajes: Java, TypeScript, SQL',
      backend: 'Backend: Spring Boot, NestJS',
      infra: 'Infra: Docker, Kubernetes, AWS',
      data: 'Datos: PostgreSQL, MongoDB, Redis',
      tools: 'Herramientas: Cursor, Claude Code, Codex',
    },
    path: {
      heading: 'Cómo llegué acá',
      body: 'Empecé como desarrollador full stack. Estuve un tiempo cubriendo frontend y backend hasta que me di cuenta de que lo que más me enganchaba era el back: el diseño de APIs, las decisiones de arquitectura, los problemas que aparecen cuando el sistema crece. Hoy ese es el lugar donde quiero profundizar.',
    },
    fit: {
      heading: 'Qué busco (y qué no)',
      goodFitLead: 'Donde encajo bien:',
      goodFit: [
        'Equipos donde se discuten decisiones técnicas, no se ejecutan tickets a ciegas.',
        'Productos backend con complejidad real: concurrencia, escala, integraciones críticas.',
        'Culturas donde escribir un postmortem honesto se valora más que ocultar un bug.',
      ],
      badFitLead: 'Donde no encajo:',
      badFit: [
        'Roles donde el "senior" decide y el resto ejecuta sin discutir.',
        'Stacks elegidos por moda y no por problema.',
        'Equipos sin tolerancia al error — donde nadie escribe nada porque todo va perfecto.',
      ],
    },
  },
  now: {
    title: 'Hoy',
    updated: 'Actualizado: Abril 2026',
    learning: {
      heading: 'Aprendiendo',
      items: [
        'Concurrencia en Java con CompletableFuture y Virtual Threads',
        'Patrones de resiliencia: circuit breaker, bulkhead, retry',
        'Arquitectura de sistemas distribuidos',
      ],
    },
    building: {
      heading: 'Construyendo',
      items: ['Este journal — journal-dev', 'Explorando diseño de APIs resilientes en Spring Boot'],
    },
    reading: {
      heading: 'Leyendo',
      items: ['Cointeligencia, Vivir y trabajar con la IA — Ethan Mollick', 'Artificial, La nueva inteligencia y el contorno de lo humano — Mariano Sigman, Santiago Bilinkis'],
    },
  },
};
