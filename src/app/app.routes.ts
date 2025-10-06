import { Routes } from '@angular/router';
import { DistrictentryComponent } from './features/admin/dataentry/districtentry/districtentry.component';
import { SamithientryComponent } from './features/admin/dataentry/samithientry/samithientry.component';
import { DataentryLayoutComponent } from './features/admin/dataentry/dataentry-layout/dataentry-layout.component';
import { BmentryComponent } from './features/admin/dataentry/bmentry/bmentry.component';
import { GuruentryComponent } from './features/admin/dataentry/guruentry/guruentry.component';
import { StateofficebearersentryComponent } from './features/admin/dataentry/stateofficebearersentry/stateofficebearersentry.component';
import { DistrictofficebearersentryComponent } from './features/admin/dataentry/districtofficebearersentry/districtofficebearersentry.component';
import { SamithiofficebearersentryComponent } from './features/admin/dataentry/samithiofficebearersentry/samithiofficebearersentry.component';
import { DesignationentryComponent } from './features/admin/dataentry/designationentry/designationentry.component';
import { SSSDivyaPadukaYatraComponent } from './features/sssDivyaPadukaYatra.component';
import { SSSMobileHospitalComponent } from './features/sssMobileHospital.component';

export const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Home' },
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'Sri_Sathya_Sai',
    data: { breadcrumb: 'Sri Sathya Sai', link: 0 },
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
    data: { breadcrumb: 'Wings', link: 0 },
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
            path: 'sadhanaShibir',
            data: { breadcrumb: 'Seminar' },
            loadComponent: () =>
              import('./features/wings/spiritual/sadhanaShibir.component').then(
                (c) => c.SadhanaShibirComponent
              ),
          },
          {
            path: 'seminars',
            data: { breadcrumb: 'Veda Prabaham' },
            loadComponent: () =>
              import('./features/wings/spiritual/seminars.component').then(
                (c) => c.SeminarsComponent
              ),
          },
          {
            path: 'dhyanaVrukshya',
            data: { breadcrumb: 'Dhyana Vrukshya' },
            loadComponent: () =>
              import(
                './features/wings/spiritual/dhyanaVrukshya.component'
              ).then((c) => c.DhyanaVrukshyaComponent),
          },
          {
            path: 'parthiYatra',
            data: { breadcrumb: 'Parthi Yatra' },
            loadComponent: () =>
              import('./features/wings/spiritual/parthiYatra.component').then(
                (c) => c.ParthiYatraComponent
              ),
          },
          {
            path: 'jyothiYatra',
            data: { breadcrumb: 'Jyothi Yatra' },
            loadComponent: () =>
              import('./features/wings/spiritual/jyothiYatra.component').then(
                (c) => c.JyothiYatraComponent
              ),
          },
          {
            path: 'jyothiYatra',
            data: { breadcrumb: 'Jyothi Yatra' },
            loadComponent: () =>
              import('./features/wings/spiritual/jyothiYatra.component').then(
                (c) => c.JyothiYatraComponent
              ),
          },
          {
            path: 'celebrationOfFestivals',
            data: { breadcrumb: 'Celebration of Festivals' },
            loadComponent: () =>
              import(
                './features/wings/spiritual/celebrationOfFestivals.component'
              ).then((c) => c.CelebrationOfFestivalsComponent),
          },
          {
            path: 'Lakshyarchana',
            data: { breadcrumb: 'Lakshyarchana' },
            loadComponent: () =>
              import('./features/wings/spiritual/lakshyarchana.component').then(
                (c) => c.LakshyarchanaComponent
              ),
          },
          {
            path: 'studyCircle',
            data: { breadcrumb: 'Study circle' },
            loadComponent: () =>
              import('./features/wings/spiritual/studyCircle.component').then(
                (c) => c.StudyCircleComponent
              ),
          },
          {
            path: 'swadhyaya',
            data: { breadcrumb: 'Swadhyaya' },
            loadComponent: () =>
              import('./features/wings/spiritual/swadhyaya.component').then(
                (c) => c.SwadhyayaComponent
              ),
          },
          {
            path: 'vahiniParayana',
            data: { breadcrumb: 'Vahini Parayana' },
            loadComponent: () =>
              import(
                './features/wings/spiritual/vahiniParayana.component'
              ).then((c) => c.VahiniParayanaComponent),
          },
          {
            path: 'devoteesMeet',
            data: { breadcrumb: 'Devotees meet' },
            loadComponent: () =>
              import('./features/wings/spiritual/devoteesMeet.component').then(
                (c) => c.DevoteesMeetComponent
              ),
          },
          {
            path: ':page',
            loadComponent: () =>
              import('./features/wings/spiritual.component').then(
                (c) => c.SpiritualComponent
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
        children: [
          {
            path: 'SaktiSwaroopiniDiwas',
            data: { breadcrumb: 'SaktiSwaroopiniDiwas' },
            loadComponent: () =>
              import(
                './features/wings/mahila/SaktiSwaroopiniDiwas.component'
              ).then((c) => c.SaktiSwaroopiniDiwasComponent),
          },
          {
            path: 'SaiBratakalpa',
            data: { breadcrumb: 'SaiBratakalpa' },
            loadComponent: () =>
              import('./features/wings/mahila/SaiBratakalpa.component').then(
                (c) => c.SaiBratakalpaComponent
              ),
          },
          {
            path: 'LalitaSahasraNama',
            data: { breadcrumb: 'LalitaSahasraNama' },
            loadComponent: () =>
              import(
                './features/wings/mahila/LalitaSahasraNama.component'
              ).then((c) => c.LalitaSahasraNamaComponent),
          },
          {
            path: 'KumkumaPujaArchana',
            data: { breadcrumb: 'KumkumaPujaArchana' },
            loadComponent: () =>
              import(
                './features/wings/mahila/KumkumaPujaArchana.component'
              ).then((c) => c.KumkumaPujaArchanaComponent),
          },
          {
            path: 'BaralaxmiBrata',
            data: { breadcrumb: 'BaralaxmiBrata' },
            loadComponent: () =>
              import('./features/wings/mahila/BaralaxmiBrata.component').then(
                (c) => c.BaralaxmiBrataComponent
              ),
          },
          {
            path: 'SaiSanatani',
            data: { breadcrumb: 'SaiSanatani' },
            loadComponent: () =>
              import('./features/wings/mahila/SaiSanatani.component').then(
                (c) => c.SaiSanataniComponent
              ),
          },
          {
            path: 'SaiPremadhara',
            data: { breadcrumb: 'SaiPremadhara' },
            loadComponent: () =>
              import('./features/wings/mahila/SaiPremadhara.component').then(
                (c) => c.SaiPremadharaComponent
              ),
          },
          {
            path: 'MahilaConvention',
            data: { breadcrumb: 'MahilaConvention' },
            loadComponent: () =>
              import('./features/wings/mahila/MahilaConvention.component').then(
                (c) => c.MahilaConventionComponent
              ),
          },
          {
            path: 'MahilaBhajanSatsangStudyCircle',
            data: { breadcrumb: 'MahilaBhajanSatsangStudyCircle' },
            loadComponent: () =>
              import(
                './features/wings/mahila/MahilaBhajanSatsangStudyCircle.component'
              ).then((c) => c.MahilaBhajanSatsangStudyCircleComponent),
          },
          {
            path: '',
            loadComponent: () =>
              import('./features/wings/ladies.component').then(
                (c) => c.LadiesComponent
              ),
          },
        ],
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
        path: ':page',
        loadComponent: () =>
          import('./features/wings/wings.component').then(
            (c) => c.WingsComponent
          ),
      },
    ],
  },
  {
    path: 'innovativeProjects',
    data: { breadcrumb: 'Innovative Projects', link: 0 },
    children: [
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
        path: 'sssGramaSeva',
        data: { breadcrumb: 'Sri Sathya Sai Grama Seva' },
        loadComponent: () =>
          import('./features/sssGramaSeva.component').then(
            (c) => c.SssGramaSevaComponent
          ),
      },
      {
        path: 'sssPrematharu',
        data: { breadcrumb: 'Sri Sathya Sai Prematharu' },
        loadComponent: () =>
          import('./features/sssPrematharu.component').then(
            (c) => c.SssPrematharuComponent
          ),
      },
      {
        path: 'sssDivyaPadukaYatra',
        data: { breadcrumb: 'Sri Sathya Sai Divya Paduka Yatra' },
        loadComponent: () =>
          import('./features/sssDivyaPadukaYatra.component').then(
            (c) => c.SSSDivyaPadukaYatraComponent
          ),
      },
      {
        path: 'sssNirmalaJhar',
        data: { breadcrumb: 'Sri Sathya Sai Nirmala Jhar' },
        loadComponent: () =>
          import('./features/sssNirmalaJhar.component').then(
            (c) => c.SSSNirmalaJharComponent
          ),
      },
      {
        path: 'sssMobileHospital',
        data: { breadcrumb: 'Sri Sathya Sai Mobile Hospital' },
        loadComponent: () =>
          import('./features/sssMobileHospital.component').then(
            (c) => c.SSSMobileHospitalComponent
          ),
      },
    ],
  },
  {
    path: 'organization',
    data: { breadcrumb: 'Organization', link: 0 },
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
      { path: 'designation', component: DesignationentryComponent },
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
    data: { breadcrumb: 'Home' },
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
];
