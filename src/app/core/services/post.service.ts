import { computed, inject, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';

import { Post } from '../models/post.model';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly lang = inject(LanguageService);

  private readonly resource = httpResource<Post[]>(() =>
    `/data/posts.${this.lang.currentLang()}.json`,
  );

  readonly posts = computed<readonly Post[]>(() => {
    const value = this.resource.value() ?? [];
    return [...value].sort((a, b) => b.date.localeCompare(a.date));
  });

  readonly isLoading = this.resource.isLoading;
  readonly error = this.resource.error;
  readonly featured = computed(() => this.posts().filter((p) => p.featured));
}
