import { computed, inject, Injectable, signal } from '@angular/core';

import { Post } from '../models/post.model';
import { LanguageService } from './language.service';
import postsEs from '../../../data/posts.es.json';
import postsEn from '../../../data/posts.en.json';

const POSTS_BY_LANG: Record<string, readonly Post[]> = {
  es: postsEs as Post[],
  en: postsEn as Post[],
};

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly lang = inject(LanguageService);

  readonly posts = computed<readonly Post[]>(() => {
    const value = POSTS_BY_LANG[this.lang.currentLang()] ?? POSTS_BY_LANG['es'];
    return [...value].sort((a, b) => b.date.localeCompare(a.date));
  });

  // Data is imported statically, so there is no async loading or error state.
  readonly isLoading = signal(false);
  readonly error = signal<unknown>(undefined);
  readonly featured = computed(() => this.posts().filter((p) => p.featured));
}
