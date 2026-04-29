import { computed, Injectable, signal } from '@angular/core';

import { en } from '../i18n/en';
import { es } from '../i18n/es';
import { Translations } from '../i18n/translations.type';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly currentLang = signal<Lang>(
    (localStorage.getItem(STORAGE_KEY) as Lang | null) ?? 'es',
  );

  readonly translations = computed<Translations>(() =>
    this.currentLang() === 'es' ? es : en,
  );

  toggle(): void {
    const next: Lang = this.currentLang() === 'es' ? 'en' : 'es';
    this.currentLang.set(next);
    localStorage.setItem(STORAGE_KEY, next);
  }
}
