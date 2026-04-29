import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-now',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './now.html',
  styleUrl: './now.css',
})
export class NowComponent {
  readonly t = inject(LanguageService).translations;
}
