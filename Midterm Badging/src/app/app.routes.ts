import { Contact } from './contact/contact';
import { Services } from './services/services';
import { About } from './about/about';
import { Home } from './home/home';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
