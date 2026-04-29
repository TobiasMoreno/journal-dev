import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetailComponent {
  private readonly postService = inject(PostService);
  private readonly langService = inject(LanguageService);

  readonly t = this.langService.translations;
  readonly id = input.required<string>();
  readonly isLoading = this.postService.isLoading;
  readonly error = this.postService.error;
  readonly post = computed(() => this.postService.posts().find((p) => p.id === this.id()));
}
