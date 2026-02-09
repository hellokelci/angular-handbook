import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Faqs } from './pages/faqs/faqs';
import { Init } from './pages/init/init';
import { Concepts } from './pages/concepts/concepts';
import { Dictionary } from './pages/dictionary/dictionary';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'init',
    component: Init,
  },
  {
    path: 'concepts',
    component: Concepts,
  },
  {
    path: 'dictionary',
    component: Dictionary,
  },
  {
    path: 'faqs',
    component: Faqs,
  },
];