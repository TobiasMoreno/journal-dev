import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent {
  private readonly postService = inject(PostService);
  private readonly langService = inject(LanguageService);

  readonly t = this.langService.translations;
  readonly posts = this.postService.posts;
  readonly isLoading = this.postService.isLoading;
  readonly error = this.postService.error;
}
