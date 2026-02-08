import {Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {Faqs} from './pages/faqs/faqs';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },
  {
    path: 'faqs',
    component: Faqs,
    title: 'FAQs',
  },
];