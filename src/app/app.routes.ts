import { Routes } from '@angular/router';
import { DistrictentryComponent } from './features/admin/dataentry/districtentry/districtentry.component';
import { SamithientryComponent } from './features/admin/dataentry/samithientry/samithientry.component';
import { DataentryLayoutComponent } from './features/admin/dataentry/dataentry-layout/dataentry-layout.component';
import { BmentryComponent } from './features/admin/dataentry/bmentry/bmentry.component';
import { GuruentryComponent } from './features/admin/dataentry/guruentry/guruentry.component';
import { StateofficebearersentryComponent } from './features/admin/dataentry/stateofficebearersentry/stateofficebearersentry.component';
import { DistrictofficebearersentryComponent } from './features/admin/dataentry/districtofficebearersentry/districtofficebearersentry.component';
import { SamithiofficebearersentryComponent } from './features/admin/dataentry/samithiofficebearersentry/samithiofficebearersentry.component';

export const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Home' },
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'Sri_Sathya_Sai',
    data: { breadcrumb: 'Sri Sathya Sai' },
    children: [
      {
        path: 'introduction',
        data: { breadcrumb: 'Introduction' },
        loadComponent: () =>
          import('./features/sri_sathya_sai/introduction.component').then(
            (c) => c.IntroductionComponent
          ),
      },
      {
        path: 'life',
        data: { breadcrumb: 'Life' },
        loadComponent: () =>
          import('./features/sri_sathya_sai/life.component').then(
            (c) => c.LifeComponent
          ),
      },
      {
        path: 'teachings',
        data: { breadcrumb: 'Teachings' },
        loadComponent: () =>
          import('./features/sri_sathya_sai/teachings.component').then(
            (c) => c.TeachingsComponent
          ),
      },
      {
        path: 'works',
        data: { breadcrumb: 'Works' },
        loadComponent: () =>
          import('./features/sri_sathya_sai/works.component').then(
            (c) => c.WorksComponent
          ),
      },
    ],
  },
  {
    path: 'wings',
    data: { breadcrumb: 'Wings' },
    children: [
      {
        path: 'service',
        data: { breadcrumb: 'Service' },
        loadComponent: () =>
          import('./features/wings/service.component').then(
            (c) => c.ServiceComponent
          ),
      },
      {
        path: 'spiritual',
        data: { breadcrumb: 'Spiritual' },
        children: [
          {
            path: 'bhajan',
            data: { breadcrumb: 'Bhajan' },
            loadComponent: () =>
              import('./features/wings/spiritual/bhajan.component').then(
                (c) => c.BhajanComponent
              ),
          },
          {
            path: 'vedaPrabaham',
            data: { breadcrumb: 'Veda Prabaham' },
            loadComponent: () =>
              import('./features/wings/spiritual/vedaPrabaham.component').then(
                (c) => c.VedaPrabahamComponent
              ),
          },
          {
            path: '',
            loadComponent: () =>
              import('./features/wings/spiritual.component').then(
                (c) => c.SpiritualComponent
              ),
          },
        ],
      },
      {
        path: 'education',
        data: { breadcrumb: 'Education' },
        loadComponent: () =>
          import('./features/wings/education.component').then(
            (c) => c.EducationComponent
          ),
      },
      {
        path: 'ladies',
        data: { breadcrumb: 'Ladies' },
        loadComponent: () =>
          import('./features/wings/ladies.component').then(
            (c) => c.LadiesComponent
          ),
      },
      {
        path: 'youth',
        data: { breadcrumb: 'Youth' },
        loadComponent: () =>
          import('./features/wings/youth.component').then(
            (c) => c.YouthComponent
          ),
      },
      {
        path: 'holisticHealthCare',
        data: { breadcrumb: 'Holistic Health Care' },
        loadComponent: () =>
          import('./features/wings/holisticHealthCare.component').then(
            (c) => c.HolisticHealthCareComponent
          ),
      },
      {
        path: 'teleMedicineCenter',
        data: { breadcrumb: 'Tele Medicine Center' },
        loadComponent: () =>
          import('./features/wings/teleMedicineCenter.component').then(
            (c) => c.TeleMedicineCenterComponent
          ),
      },
      {
        path: 'bookTrust',
        data: { breadcrumb: 'Book Trust' },
        loadComponent: () =>
          import('./features/wings/bookTrust.component').then(
            (c) => c.BookTrustComponent
          ),
      },
      {
        path: ':page',
        loadComponent: () =>
          import('./features/wings/wings.component').then(
            (c) => c.WingsComponent
          ),
      },
    ],
  },
  {
    path: 'organization',
    data: { breadcrumb: 'Organization' },
    children: [
      {
        path: 'centralTrust',
        data: { breadcrumb: 'Central Trust' },
        loadComponent: () =>
          import('./features/organization/centralTrust.component').then(
            (c) => c.CentralTrustComponent
          ),
      },
      {
        path: 'sevaOrgOdisha',
        data: { breadcrumb: 'Seva Organisations' },
        loadComponent: () =>
          import('./features/organization/sevaOrgOdisha.component').then(
            (c) => c.SevaOrgOdishaComponent
          ),
      },
      {
        path: 'stateCoordinators',
        data: { breadcrumb: 'State Coordinators' },
        loadComponent: () =>
          import('./features/organization/stateCoordinators.component').then(
            (c) => c.StateCoordinatorsComponent
          ),
      },
      {
        path: 'sic',
        data: { breadcrumb: 'State In-Charges' },
        loadComponent: () =>
          import('./features/organization/sic.component').then(
            (c) => c.SICComponent
          ),
      },
      {
        path: 'districtPresidents',
        data: { breadcrumb: 'District Presidents' },
        loadComponent: () =>
          import('./features/organization/districtPresidents.component').then(
            (c) => c.DistrictPresidentsComponent
          ),
      },
      {
        path: 'districtCoordinator',
        data: { breadcrumb: 'District Coordinator' },
        loadComponent: () =>
          import('./features/organization/districtCoordinator.component').then(
            (c) => c.DistrictCoordinatorComponent
          ),
      },
      {
        path: 'samithiConvenors',
        data: { breadcrumb: 'Samithi Convenors' },
        loadComponent: () =>
          import('./features/organization/samithiConvenors.component').then(
            (c) => c.SamithiConvenorsComponent
          ),
      },
      {
        path: 'samithis',
        data: { breadcrumb: 'Samithis' },
        loadComponent: () =>
          import('./features/organization/samithis.component').then(
            (c) => c.SamithisComponent
          ),
      },
      {
        path: 'bhajanMandalis',
        data: { breadcrumb: 'Bhajan Mandalis' },
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
    data: { breadcrumb: 'Resources' },
    loadComponent: () =>
      import('./features/resources/resources.component').then(
        (c) => c.ResourcesComponent
      ),
  },
  {
    path: 'events',
    data: { breadcrumb: 'Events' },
    loadComponent: () =>
      import('./features/events/events.component').then(
        (c) => c.EventsComponent
      ),
  },
  {
    path: 'report',
    data: { breadcrumb: 'Report' },
    loadComponent: () =>
      import('./features/report/report.component').then(
        (c) => c.ReportComponent
      ),
  },
  {
    path: 'admin',
    data: { breadcrumb: 'Admin' },
    loadComponent: () =>
      import('./features/admin/admin.component').then((c) => c.AdminComponent),
  },
  {
    path: 'dataentry',
    data: { breadcrumb: 'Data Entry' },
    component: DataentryLayoutComponent,
    children: [
      { path: 'district', component: DistrictentryComponent },
      { path: 'samithi', component: SamithientryComponent },
      { path: 'bhajanmandali', component: BmentryComponent },
      { path: 'guru', component: GuruentryComponent },
      {
        path: 'stateofficebearers',
        component: StateofficebearersentryComponent,
      },
      {
        path: 'districtofficebearers',
        component: DistrictofficebearersentryComponent,
      },
      {
        path: 'samithiofficebearers',
        component: SamithiofficebearersentryComponent,
      },
      { path: '', redirectTo: 'district', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
];
