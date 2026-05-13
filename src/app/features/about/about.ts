import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  private readonly langService = inject(LanguageService);

  readonly t = this.langService.translations;
}
