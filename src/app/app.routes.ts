import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'boards',
    loadComponent: () => import('./pages/boards/boards.component').then(c => c.BoardsComponent)
  },
  {
    path: 'board',
    loadComponent: () => import('./pages/board/board.component').then(c => c.BoardComponent)
  }
];
