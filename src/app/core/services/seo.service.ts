import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Post } from '../models/post.model';

const SITE_URL = 'https://tobias-moreno.netlify.app';
const SITE_OG_IMAGE = `${SITE_URL}/og-image.png`;
const SITE_TITLE = 'Tobias Moreno — Journal';
const SITE_DESCRIPTION = 'Backend engineer. Documentando la evolución.';
const AUTHOR = 'Tobias Moreno';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  setDefaults(): void {
    this.title.setTitle(SITE_TITLE);

    this.upsert('name', 'description', SITE_DESCRIPTION);

    this.upsert('property', 'og:type', 'website');
    this.upsert('property', 'og:title', SITE_TITLE);
    this.upsert('property', 'og:description', SITE_DESCRIPTION);
    this.upsert('property', 'og:url', SITE_URL);
    this.upsert('property', 'og:image', SITE_OG_IMAGE);

    this.upsert('name', 'twitter:card', 'summary_large_image');
    this.upsert('name', 'twitter:title', SITE_TITLE);
    this.upsert('name', 'twitter:description', SITE_DESCRIPTION);
    this.upsert('name', 'twitter:image', SITE_OG_IMAGE);

    this.remove('property', 'article:published_time');
    this.remove('property', 'article:author');
    this.remove('property', 'article:tag');
  }

  setForPost(post: Post): void {
    const pageTitle = `${post.title} — ${AUTHOR}`;
    const url = `${SITE_URL}/posts/${post.id}`;
    const description = post.summary;
    const tags = post.tags.join(',');

    this.title.setTitle(pageTitle);

    this.upsert('name', 'description', description);

    this.upsert('property', 'og:type', 'article');
    this.upsert('property', 'og:title', post.title);
    this.upsert('property', 'og:description', description);
    this.upsert('property', 'og:url', url);
    this.upsert('property', 'og:image', SITE_OG_IMAGE);

    this.upsert('property', 'article:published_time', post.date);
    this.upsert('property', 'article:author', AUTHOR);
    this.upsert('property', 'article:tag', tags);

    this.upsert('name', 'twitter:card', 'summary_large_image');
    this.upsert('name', 'twitter:title', post.title);
    this.upsert('name', 'twitter:description', description);
    this.upsert('name', 'twitter:image', SITE_OG_IMAGE);
  }

  private upsert(attr: 'name' | 'property', key: string, content: string): void {
    const selector = `${attr}="${key}"`;
    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ [attr]: key, content });
    } else {
      this.meta.addTag({ [attr]: key, content });
    }
  }

  private remove(attr: 'name' | 'property', key: string): void {
    this.meta.removeTag(`${attr}="${key}"`);
  }
}
