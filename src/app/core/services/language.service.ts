import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { en } from '../i18n/en';
import { es } from '../i18n/es';
import { Translations } from '../i18n/translations.type';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly currentLang = signal<Lang>(this.loadLang());

  readonly translations = computed<Translations>(() =>
    this.currentLang() === 'es' ? es : en,
  );

  toggle(): void {
    const next: Lang = this.currentLang() === 'es' ? 'en' : 'es';
    this.currentLang.set(next);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }

  private loadLang(): Lang {
    if (!isPlatformBrowser(this.platformId)) {
      return 'es';
    }
    return (localStorage.getItem(STORAGE_KEY) as Lang | null) ?? 'es';
  }
}
