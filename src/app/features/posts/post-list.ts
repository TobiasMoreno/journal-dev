import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
import { PostService } from '../../core/services/post.service';

const PAGE_SIZE = 5;

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
  readonly allPosts = this.postService.posts;
  readonly isLoading = this.postService.isLoading;
  readonly error = this.postService.error;

  readonly currentPage = signal(1);

  readonly totalPages = computed(() => Math.ceil(this.allPosts().length / PAGE_SIZE));

  readonly posts = computed(() => {
    const start = (this.currentPage() - 1) * PAGE_SIZE;
    return this.allPosts().slice(start, start + PAGE_SIZE);
  });

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1),
  );

  goToPage(page: number): void {
    this.currentPage.set(page);
  }

  prevPage(): void {
    if (this.currentPage() > 1) this.currentPage.update(p => p - 1);
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) this.currentPage.update(p => p + 1);
  }
}
