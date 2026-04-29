import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  private readonly postService = inject(PostService);
  private readonly langService = inject(LanguageService);

  readonly t = this.langService.translations;
  readonly isLoading = this.postService.isLoading;
  readonly error = this.postService.error;
  readonly recentPosts = computed(() => this.postService.posts().slice(0, 4));
}
