import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (r) => r.ContactComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./components/profile/profile.component').then(
        (r) => r.ProfileComponent
      ),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./components/project-page/project-page.component').then(
        (r) => r.ProjectPageComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (r) => r.NotFoundComponent
      ),
  },
];
