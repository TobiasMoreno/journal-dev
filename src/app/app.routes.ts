import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'posts',
    loadComponent: () => import('./features/posts/post-list').then(m => m.PostListComponent),
  },
  {
    path: 'now',
    loadComponent: () => import('./features/now/now').then(m => m.NowComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then(m => m.AboutComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
