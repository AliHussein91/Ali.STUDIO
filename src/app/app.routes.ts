import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { projectResolver } from './resolvers/project.resolver';

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
    path: 'projects/:title',
    loadComponent: () =>
      import('./components/project-page/project-page.component').then(
        (r) => r.ProjectPageComponent
      ),
      resolve: {project: projectResolver}
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (r) => r.NotFoundComponent
      ),
  },
];
