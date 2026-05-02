import { Translations } from './translations.type';

export const en: Translations = {
  nav: {
    posts: 'Posts',
    now: 'Now',
    about: 'About',
  },
  footer: {
    role: 'Backend Engineer',
  },
  home: {
    hero: {
      titleLine1: 'Backend engineer.',
      titleLine2: 'Documenting the evolution.',
      sub: 'Technical learnings, professional decisions, and real mistakes. All in public, all unfiltered.',
    },
    posts: {
      heading: 'Posts',
      loading: 'Loading posts…',
      error: "Couldn't load the posts.",
      allPosts: 'All posts →',
    },
  },
  postList: {
    title: 'Posts',
    sub: 'Learnings, decisions, and technical reflections.',
    loading: 'Loading posts…',
    error: "Couldn't load the posts.",
    pagination: {
      prev: '← Previous',
      next: 'Next →',
      pageOf: (current: number, total: number) => `Page ${current} of ${total}`,
    },
  },
  postDetail: {
    back: '← All posts',
    loading: 'Loading…',
    error: "Couldn't load this post.",
    noContent: 'Content coming soon.',
    notFound: 'Post not found.',
    viewLinkedIn: 'View LinkedIn version →',
  },
  about: {
    title: 'About',
    sub: 'Who I am, how I work, what I look for. No clichés.',
    identity: {
      heading: 'Identity',
      p1before: "I'm Tobias Moreno, Backend Engineer at",
      p1after:
        ", a fintech focused on digital credit. I live in Córdoba, Argentina, and I've been building software for",
      p2: 'I currently work with Java, Spring Boot, and NestJS, on systems that move real money for real people. That orders priorities fast: what breaks matters more than what looks good in a demo.',
    },
    howIWork: {
      heading: 'How I work',
      card1title: 'Software is decisions, not code.',
      card1body:
        'Almost every serious production problem I\'ve seen came from a small decision nobody discussed: a poorly chosen default, a timeout never agreed on, an abstraction added "just in case." That\'s why the code I respect most is the code with a visible reason.',
      card2title: 'Better honest than polished.',
      card2body:
        "There are things I haven't mastered yet — advanced concurrency is the one I'm working hardest on right now. I update that list often and I don't mind showing it: I think it's more useful for a team to know what I don't know, rather than pretending I have it all figured out.",
      card3title: 'Learning in public.',
      card3body:
        "This journal exists because writing what I learn forces me to understand it twice. I also do it so someone coming behind me doesn't have to stumble over the same mistakes.",
      card4title: 'Pragmatism over dogma.',
      card4body:
        "Microservices when it hurts not to have them. Tests when the cost of breaking exceeds the cost of writing them. Rewrite when tech debt has started slowing the team down, not before. The engineering I defend is the kind measured in consequences, not aesthetics.",
    },
    stack: {
      heading: 'Current stack',
      languages: 'Languages: Java, TypeScript, SQL',
      backend: 'Backend: Spring Boot, NestJS',
      infra: 'Infra: Docker, Kubernetes, AWS',
      data: 'Data: PostgreSQL, MongoDB, Redis',
      tools: 'Tools: Cursor, Claude Code, Codex',
    },
    path: {
      heading: 'How I got here',
      body: "I started as a full stack developer. I spent some time covering both frontend and backend until I realized what hooked me most was the back end: API design, architecture decisions, the problems that show up when a system grows. That's the area I want to go deeper on.",
    },
    fit: {
      heading: "What I'm looking for (and what I'm not)",
      goodFitLead: 'Where I fit well:',
      goodFit: [
        'Teams where technical decisions are discussed, not just tickets executed blindly.',
        'Backend products with real complexity: concurrency, scale, critical integrations.',
        'Cultures where writing an honest postmortem is valued more than hiding a bug.',
      ],
      badFitLead: "Where I don't fit:",
      badFit: [
        'Roles where the "senior" decides and the rest execute without discussion.',
        'Stacks chosen by trend, not by problem.',
        "Teams with zero tolerance for failure — where nobody writes anything because everything's perfect.",
      ],
    },
  },
  now: {
    title: 'Now',
    updated: 'Updated: May 2026',
    learning: {
      heading: 'Learning',
      items: [
        'AI Agents: architecture, patterns and implementation',
        'Software Design Documents (SDD)',
        'LLM Tokens: tokenization, pricing and optimization',
        'Best language models: selection criteria and use cases',
        'Skills optimization for AI agents',
        'Concurrency in Java with CompletableFuture and Virtual Threads',
        'Resilience patterns: circuit breaker, bulkhead, retry',
        'Distributed systems architecture',
        'Oratory skills',
      ],
    },
    building: {
      heading: 'Building',
      items: ['This journal — journal-dev', 'Exploring resilient API design in Spring Boot'],
    },
    reading: {
      heading: 'Reading',
      items: ['Co-Intelligence: Living and Working with AI — Ethan Mollick', 'Artificial: The New Intelligence and the Boundaries of the Human — Mariano Sigman, Santiago Bilinkis'],
    },
  },
};
