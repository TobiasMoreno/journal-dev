import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PostPreview {
  id: string;
  title: string;
  date: string;
  type: string;
  tags: string[];
}

@Component({
  selector: 'app-post-list',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent {
  readonly posts: PostPreview[] = [
    { id: 'completable-future-intro', title: 'Mis primeros pasos con concurrencia en Java', date: 'Apr 28, 2026', type: 'learning', tags: ['java', 'concurrency'] },
    { id: 'nestjs-vs-spring-boot', title: 'NestJS vs Spring Boot: cuándo elegir cada uno', date: 'Apr 15, 2026', type: 'thinking', tags: ['nestjs', 'spring'] },
    { id: 'async-errors', title: 'Los errores que cometí usando async por primera vez', date: 'Apr 01, 2026', type: 'failure', tags: ['async', 'backend'] },
    { id: 'distributed-systems-intro', title: 'Qué significa software escalable (de verdad)', date: 'Mar 20, 2026', type: 'learning', tags: ['architecture', 'backend'] },
    { id: 'career-pivot', title: 'Por qué me enfoqué en sistemas distribuidos', date: 'Mar 10, 2026', type: 'career', tags: ['career'] },
  ];
}
