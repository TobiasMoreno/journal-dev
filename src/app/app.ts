import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly langService = inject(LanguageService);

  readonly t = this.langService.translations;
  readonly currentLang = this.langService.currentLang;

  toggleLang(): void {
    this.langService.toggle();
  }
}
