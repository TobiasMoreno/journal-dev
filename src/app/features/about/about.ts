import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { LanguageService } from '../../core/services/language.service';
import { Lang } from '../../core/services/language.service';

const CAREER_START = new Date(2025, 2, 1);

function formatExperience(start: Date, now: Date, lang: Lang): string {
  const months = Math.max(
    0,
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()),
  );
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (lang === 'en') {
    if (years === 0) return `${months} ${months === 1 ? 'month' : 'months'}`;
    if (remainingMonths === 0) return `${years} ${years === 1 ? 'year' : 'years'}`;
    return `${years} ${years === 1 ? 'year' : 'years'} and ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  }

  if (years === 0) return `${months} ${months === 1 ? 'mes' : 'meses'}`;
  if (remainingMonths === 0) return `${years} ${years === 1 ? 'año' : 'años'}`;
  return `${years} ${years === 1 ? 'año' : 'años'} y ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
}

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  private readonly langService = inject(LanguageService);

  readonly t = this.langService.translations;
  readonly experience = computed(() =>
    formatExperience(CAREER_START, new Date(), this.langService.currentLang()),
  );
}
