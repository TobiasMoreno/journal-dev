import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
import { PostService } from '../../core/services/post.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink, DatePipe, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
  host: {
    '(document:keydown.escape)': 'closeImageOnEscape()',
  },
})
export class PostDetailComponent {
  private readonly postService = inject(PostService);
  private readonly langService = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly t = this.langService.translations;
  readonly id = input.required<string>();
  readonly isLoading = this.postService.isLoading;
  readonly error = this.postService.error;
  readonly post = computed(() => this.postService.posts().find((p) => p.id === this.id()));
  readonly expandedImage = signal<{ src: string; alt: string } | null>(null);
  readonly imageZoom = signal(1);
  readonly imageZoomPercent = computed(() => `${this.imageZoom() * 100}%`);
  readonly isPanning = signal(false);

  private panStart = { x: 0, y: 0, scrollLeft: 0, scrollTop: 0 };

  constructor() {
    effect((onCleanup) => {
      const current = this.post();
      if (current) {
        this.seo.setForPost(current);
      }
      onCleanup(() => this.seo.setDefaults());
    });
  }

  openImage(src: string, alt: string): void {
    this.expandedImage.set({ src, alt });
    this.imageZoom.set(1);
  }

  closeImage(): void {
    this.expandedImage.set(null);
    this.imageZoom.set(1);
    this.isPanning.set(false);
  }

  zoomIn(): void {
    this.setZoom(this.imageZoom() + 0.25);
  }

  zoomOut(): void {
    this.setZoom(this.imageZoom() - 0.25);
  }

  resetZoom(): void {
    this.imageZoom.set(1);
  }

  zoomWithWheel(event: WheelEvent): void {
    event.preventDefault();
    const viewport = event.currentTarget instanceof HTMLElement ? event.currentTarget : null;
    if (!viewport) {
      return;
    }

    const previousZoom = this.imageZoom();
    const nextZoom = this.clampZoom(previousZoom + (event.deltaY < 0 ? 0.15 : -0.15));
    if (nextZoom === previousZoom) {
      return;
    }

    const rect = viewport.getBoundingClientRect();
    const cursorX = event.clientX - rect.left;
    const cursorY = event.clientY - rect.top;
    const contentX = viewport.scrollLeft + cursorX;
    const contentY = viewport.scrollTop + cursorY;
    const zoomRatio = nextZoom / previousZoom;

    this.imageZoom.set(nextZoom);

    requestAnimationFrame(() => {
      viewport.scrollLeft = contentX * zoomRatio - cursorX;
      viewport.scrollTop = contentY * zoomRatio - cursorY;
    });
  }

  startPan(event: PointerEvent): void {
    if (event.button !== 0 || this.imageZoom() <= 1) {
      return;
    }

    const viewport = event.currentTarget instanceof HTMLElement ? event.currentTarget : null;
    if (!viewport) {
      return;
    }

    event.preventDefault();
    viewport.setPointerCapture(event.pointerId);
    this.isPanning.set(true);
    this.panStart = {
      x: event.clientX,
      y: event.clientY,
      scrollLeft: viewport.scrollLeft,
      scrollTop: viewport.scrollTop,
    };
  }

  panImage(event: PointerEvent): void {
    if (!this.isPanning()) {
      return;
    }

    const viewport = event.currentTarget instanceof HTMLElement ? event.currentTarget : null;
    if (!viewport) {
      return;
    }

    event.preventDefault();
    viewport.scrollLeft = this.panStart.scrollLeft - (event.clientX - this.panStart.x);
    viewport.scrollTop = this.panStart.scrollTop - (event.clientY - this.panStart.y);
  }

  endPan(event: PointerEvent): void {
    const viewport = event.currentTarget instanceof HTMLElement ? event.currentTarget : null;
    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
    this.isPanning.set(false);
  }

  closeImageOnEscape(): void {
    this.closeImage();
  }

  private setZoom(value: number): void {
    this.imageZoom.set(this.clampZoom(value));
  }

  private clampZoom(value: number): number {
    return Math.min(3, Math.max(1, Number(value.toFixed(2))));
  }
}
