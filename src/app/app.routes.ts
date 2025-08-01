import { Routes } from '@angular/router';
import { DistrictentryComponent } from './features/admin/dataentry/districtentry/districtentry.component';
import { SamithientryComponent } from './features/admin/dataentry/samithientry/samithientry.component';
import { DataentryLayoutComponent } from './features/admin/dataentry/dataentry-layout/dataentry-layout.component';
import { BmentryComponent } from './features/admin/dataentry/bmentry/bmentry.component';

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
    path: 'organization',
    children: [
      {
        path: 'stateCoordinators',
        loadComponent: () =>
          import('./features/organization/stateCoordinators.component').then(
            (c) => c.StateCoordinatorsComponent
          ),
      },
      {
        path: 'sic',
        loadComponent: () =>
          import('./features/organization/sic.component').then(
            (c) => c.SICComponent
          ),
      },
      {
        path: 'districtPresidents',
        loadComponent: () =>
          import('./features/organization/districtPresidents.component').then(
            (c) => c.DistrictPresidentsComponent
          ),
      },
      {
        path: 'districtCoordinator',
        loadComponent: () =>
          import('./features/organization/districtCoordinator.component').then(
            (c) => c.DistrictCoordinatorComponent
          ),
      },
      {
        path: 'samithiConvenors',
        loadComponent: () =>
          import('./features/organization/samithiConvenors.component').then(
            (c) => c.SamithiConvenorsComponent
          ),
      },
      {
        path: 'samithis',
        loadComponent: () =>
          import('./features/organization/samithis.component').then(
            (c) => c.SamithisComponent
          ),
      },
      {
        path: 'bhajanMandalis',
        loadComponent: () =>
          import('./features/organization/BhajanMandalis.component').then(
            (c) => c.BhajanMandalisComponent
          ),
      },
      {
        path: ':page',
        loadComponent: () =>
          import('./features/organization/organization.component').then(
            (c) => c.OrganizationComponent
          ),
      },
    ],
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
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin.component').then((c) => c.AdminComponent),
  },
  {
    path: 'dataentry',
    component: DataentryLayoutComponent,
    children: [
      { path: 'district', component: DistrictentryComponent },
      { path: 'samithi', component: SamithientryComponent },
      { path: 'bhajanmandali', component: BmentryComponent },
      { path: '', redirectTo: 'district', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
];
