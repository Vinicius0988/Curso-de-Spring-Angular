import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cursos' },
  {
    path: 'cursos',
    loadComponent: () =>
      import('./cursos/cursos').then(m => m.Cursos),
  }
];
