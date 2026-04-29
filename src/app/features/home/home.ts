import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PostPreview {
  id: string;
  title: string;
  date: string;
  type: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  readonly posts: PostPreview[] = [
    { id: 'completable-future-intro', title: 'Mis primeros pasos con concurrencia en Java', date: 'Apr 28, 2026', type: 'learning' },
    { id: 'nestjs-vs-spring-boot', title: 'NestJS vs Spring Boot: cuándo elegir cada uno', date: 'Apr 15, 2026', type: 'thinking' },
    { id: 'async-errors', title: 'Los errores que cometí usando async por primera vez', date: 'Apr 01, 2026', type: 'failure' },
    { id: 'distributed-systems-intro', title: 'Qué significa software escalable (de verdad)', date: 'Mar 20, 2026', type: 'learning' },
  ];
}
