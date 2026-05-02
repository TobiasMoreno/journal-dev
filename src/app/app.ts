import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly langService = inject(LanguageService);
  private readonly themeService = inject(ThemeService);

  readonly t = this.langService.translations;
  readonly currentLang = this.langService.currentLang;
  readonly isDarkMode = this.themeService.isDarkMode;

  toggleLang(): void {
    this.langService.toggle();
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
