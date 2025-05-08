import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'wings/:page',
    loadComponent: () =>
      import('./features/wings/wings.component').then((c) => c.WingsComponent),
  },
  {
    path: 'organization/:page',
    loadComponent: () =>
      import('./features/organization/organization.component').then(
        (c) => c.OrganizationComponent
      ),
  },
  {
    path: 'resources/:page',
    loadComponent: () =>
      import('./features/resources/resources.component').then(
        (c) => c.ResourcesComponent
      ),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./features/events/events.component').then(
        (c) => c.EventsComponent
      ),
  },
  {
    path: 'report',
    loadComponent: () =>
      import('./features/report/report.component').then(
        (c) => c.ReportComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
];
