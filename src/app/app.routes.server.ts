import { RenderMode, ServerRoute } from '@angular/ssr';

import postsEs from '../data/posts.es.json';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'posts/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => postsEs.map((post) => ({ id: post.id })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
