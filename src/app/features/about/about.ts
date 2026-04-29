import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

const CAREER_START = new Date(2025, 2, 1);

function formatExperience(start: Date, now: Date): string {
  const months = Math.max(
    0,
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()),
  );
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? 'mes' : 'meses'}`;
  }
  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? 'año' : 'años'}`;
  }
  return `${years} ${years === 1 ? 'año' : 'años'} y ${remainingMonths} ${
    remainingMonths === 1 ? 'mes' : 'meses'
  }`;
}

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  readonly experience = computed(() => formatExperience(CAREER_START, new Date()));
}
