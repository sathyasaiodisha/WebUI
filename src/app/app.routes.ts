import { Routes } from '@angular/router';
import { DistrictentryComponent } from './features/admin/dataentry/districtentry/districtentry.component';
import { SamithientryComponent } from './features/admin/dataentry/samithientry/samithientry.component';
import { DataentryLayoutComponent } from './features/admin/dataentry/dataentry-layout/dataentry-layout.component';
import { UsercontrolLayoutComponent } from './features/admin/usercontrol/usercontrol-layout/usercontrol-layout.component';
import { DataadminentryComponent } from './features/admin/usercontrol/dataadminentry/dataadminentry.component';
import { PasswordmanagementComponent } from './features/admin/usercontrol/passwordmanagement/passwordmanagement.component';
import { BmentryComponent } from './features/admin/dataentry/bmentry/bmentry.component';
import { SaisandeshuploadComponent } from './features/admin/dataentry/saisandeshupload/saisandeshupload.component';
import { GuruentryComponent } from './features/admin/dataentry/guruentry/guruentry.component';
import { StateofficebearersentryComponent } from './features/admin/dataentry/stateofficebearersentry/stateofficebearersentry.component';
import { DistrictofficebearersentryComponent } from './features/admin/dataentry/districtofficebearersentry/districtofficebearersentry.component';
import { SamithiofficebearersentryComponent } from './features/admin/dataentry/samithiofficebearersentry/samithiofficebearersentry.component';
import { DesignationentryComponent } from './features/admin/dataentry/designationentry/designationentry.component';
import { LoginComponent } from './features/admin/login/login.component';
import { SSSDivyaPadukaYatraComponent } from './features/sssDivyaPadukaYatra.component';
import { SSSMobileHospitalComponent } from './features/sssMobileHospital.component';
import { UnauthorizedComponent } from './features/admin/unauthorized/unauthorized.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import {StatePresidentMessageComponent} from './features/statePresidentMessage';
import { EventComponent } from './features/admin/events/event/event.component';
import { EventLayoutComponent } from './features/admin/events/event-layout/event-layout.component';

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
        children: [
          {
            path: 'NarayanaSeva',
            data: { breadcrumb: 'NarayanaSeva' },
            loadComponent: () =>
              import('./features/wings/service/NarayanaSeva.component').then(
                (c) => c.NarayanaSevaComponent
              ),
          },
          {
            path: 'TribalVillageProgramme',
            data: { breadcrumb: 'TribalVillageProgramme' },
            loadComponent: () =>
              import(
                './features/wings/service/TribalVillageProgramme.component'
              ).then((c) => c.TribalVillageProgrammeComponent),
          },
          {
            path: 'JalaChhatraSeva',
            data: { breadcrumb: 'JalaChhatraSeva' },
            loadComponent: () =>
              import('./features/wings/service/JalaChhatraSeva.component').then(
                (c) => c.JalaChhatraSevaComponent
              ),
          },
          {
            path: 'AmrutaKalasam',
            data: { breadcrumb: 'AmrutaKalasam' },
            loadComponent: () =>
              import('./features/wings/service/AmrutaKalasam.component').then(
                (c) => c.AmrutaKalasamComponent
              ),
          },
          {
            path: 'NityaNarayanaSeva',
            data: { breadcrumb: 'NityaNarayanaSeva' },
            loadComponent: () =>
              import(
                './features/wings/service/NityaNarayanaSeva.component'
              ).then((c) => c.NityaNarayanaSevaComponent),
          },
          {
            path: 'HolisticHealthCare',
            data: { breadcrumb: 'HolisticHealthCare' },
            loadComponent: () =>
              import(
                './features/wings/service/HolisticHealthCare.component'
              ).then((c) => c.HolisticHealthCareComponent),
          },
          {
            path: 'SaiSwabalambi',
            data: { breadcrumb: 'SaiSwabalambi' },
            loadComponent: () =>
              import('./features/wings/service/SaiSwabalambi.component').then(
                (c) => c.SaiSwabalambiComponent
              ),
          },
          {
            path: 'BloodDonation',
            data: { breadcrumb: 'BloodDonation' },
            loadComponent: () =>
              import('./features/wings/service/BloodDonation.component').then(
                (c) => c.BloodDonationComponent
              ),
          },
          {
            path: 'rvtc',
            data: { breadcrumb: 'rvtc' },
            loadComponent: () =>
              import('./features/wings/service/rvtc.component').then(
                (c) => c.rvtcComponent
              ),
          },
          {
            path: 'SwachhatwaRuDivyatwa',
            data: { breadcrumb: 'SwachhatwaRuDivyatwa' },
            loadComponent: () =>
              import(
                './features/wings/service/SwachhatwaRuDivyatwa.component'
              ).then((c) => c.SwachhatwaRuDivyatwaComponent),
          },
          {
            path: 'SanitationSeva',
            data: { breadcrumb: 'SanitationSeva' },
            loadComponent: () =>
              import('./features/wings/service/SanitationSeva.component').then(
                (c) => c.SanitationSevaComponent
              ),
          },
          {
            path: 'AgriCare',
            data: { breadcrumb: 'AgriCare' },
            loadComponent: () =>
              import('./features/wings/service/AgriCare.component').then(
                (c) => c.AgriCareComponent
              ),
          },
          {
            path: 'SriSathyaSaiHousingProject',
            data: { breadcrumb: 'SriSathyaSaiHousingProject' },
            loadComponent: () =>
              import(
                './features/wings/service/SriSathyaSaiHousingProject.component'
              ).then((c) => c.SriSathyaSaiHousingProjectComponent),
          },
          {
            path: 'SriSathyaSaiWaterProject',
            data: { breadcrumb: 'SriSathyaSaiWaterProject' },
            loadComponent: () =>
              import(
                './features/wings/service/SriSathyaSaiWaterProject.component'
              ).then((c) => c.SriSathyaSaiWaterProjectComponent),
          },
          {
            path: 'DisasterManagement',
            data: { breadcrumb: 'DisasterManagement' },
            loadComponent: () =>
              import(
                './features/wings/service/DisasterManagement.component'
              ).then((c) => c.DisasterManagementComponent),
          },
          {
            path: 'SriSathyaSaiSudarshan',
            data: { breadcrumb: 'SriSathyaSaiSudarshan' },
            loadComponent: () =>
              import(
                './features/wings/service/SriSathyaSaiSudarshan.component'
              ).then((c) => c.SriSathyaSaiSudarshanComponent),
          },
          {
            path: 'PrasanthiSeva',
            data: { breadcrumb: 'PrasanthiSeva' },
            loadComponent: () =>
              import('./features/wings/service/PrasanthiSeva.component').then(
                (c) => c.PrasanthiSevaComponent
              ),
          },
          {
            path: ':page',
            loadComponent: () =>
              import('./features/wings/service.component').then(
                (c) => c.ServiceComponent
              ),
          },
          {
            path: '',
            loadComponent: () =>
              import('./features/wings/service.component').then(
                (c) => c.ServiceComponent
              ),
          },
        ],
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
            path: 'saiSymphony',
            data: { breadcrumb: 'Study circle' },
            loadComponent: () =>
              import('./features/wings/spiritual/saiSymphony.component').then(
                (c) => c.SaiSymphonyComponent
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
        children: [
          {
            path: 'SriSathyaSaiBalVikas',
            data: { breadcrumb: 'SriSathyaSaiBalVikas' },
            loadComponent: () =>
              import(
                './features/wings/education/SriSathyaSaiBalVikas.component'
              ).then((c) => c.SriSathyaSaiBalVikasComponent),
          },
          {
            path: 'SriSathyaSaiVidyaJyothi',
            data: { breadcrumb: 'SriSathyaSaiVidyaJyothi' },
            loadComponent: () =>
              import(
                './features/wings/education/SriSathyaSaiVidyaJyothi.component'
              ).then((c) => c.SriSathyaSaiVidyaJyothiComponent),
          },
          {
            path: 'NityaSikshyaDana',
            data: { breadcrumb: 'NityaSikshyaDana' },
            loadComponent: () =>
              import(
                './features/wings/education/NityaSikshyaDana.component'
              ).then((c) => c.NityaSikshyaDanaComponent),
          },
          {
            path: 'VidyaVahini',
            data: { breadcrumb: 'VidyaVahini' },
            loadComponent: () =>
              import('./features/wings/education/VidyaVahini.component').then(
                (c) => c.VidyaVahiniComponent
              ),
          },
          {
            path: 'FestivalsOfJoy',
            data: { breadcrumb: 'FestivalsOfJoy' },
            loadComponent: () =>
              import(
                './features/wings/education/FestivalsOfJoy.component'
              ).then((c) => c.FestivalsOfJoyComponent),
          },
          {
            path: 'SSSCHumanExcellence',
            data: { breadcrumb: 'SSSCHumanExcellence' },
            loadComponent: () =>
              import('./features/wings/education/SSSCHumanExcellence.component').then(
                (c) => c.SSSCHumanExcellenceComponent
              ),
          },
          {
            path: 'AnandaUdyan',
            data: { breadcrumb: 'AnandaUdyan' },
            loadComponent: () =>
              import('./features/wings/education/AnandaUdyan.component').then(
                (c) => c.AnandaUdyanComponent
              ),
          },
          {
            path: 'MadhuVadishyami',
            data: { breadcrumb: 'MadhuVadishyami' },
            loadComponent: () =>
              import('./features/wings/education/MadhuVadishyami.component').then(
                (c) => c.MadhuVadishyamiComponent
              ),
          },
          {
            path: 'SaiVaatika',
            data: { breadcrumb: 'SaiVaatika' },
            loadComponent: () =>
              import('./features/wings/education/SaiVaatika.component').then(
                (c) => c.SaiVaatikaComponent
              ),
          },
          {
            path: 'ManmanaaBhava',
            data: { breadcrumb: 'ManmanaaBhava' },
            loadComponent: () =>
              import('./features/wings/education/ManmanaaBhava.component').then(
                (c) => c.ManmanaaBhavaComponent
              ),
          },
          {
            path: 'FestivalsFlavours',
            data: { breadcrumb: 'FestivalsFlavours' },
            loadComponent: () =>
              import('./features/wings/education/FestivalsFlavours.component').then(
                (c) => c.FestivalsFlavoursComponent
              ),
          },
          {
            path: ':page',
            loadComponent: () =>
              import('./features/wings/education.component').then(
                (c) => c.EducationComponent
              ),
          },
          {
            path: '',
            loadComponent: () =>
              import('./features/wings/education.component').then(
                (c) => c.EducationComponent
              ),
          },
        ],
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
        children: [
          {
            path: 'NationalInitiatives',
            data: { breadcrumb: 'NationalInitiatives' },
            loadComponent: () =>
              import(
                './features/wings/youth/NationalInitiatives.component'
              ).then((c) => c.NationalInitiativesComponent),
          },
          {
            path: 'PracticingCod',
            data: { breadcrumb: 'PracticingCod' },
            loadComponent: () =>
              import('./features/wings/youth/PracticingCod.component').then(
                (c) => c.PracticingCodComponent
              ),
          },
          {
            path: 'MaintainingOfSpiritualDairy',
            data: { breadcrumb: 'MaintainingOfSpiritualDairy' },
            loadComponent: () =>
              import(
                './features/wings/youth/MaintainingOfSpiritualDairy.component'
              ).then((c) => c.MaintainingOfSpiritualDairyComponent),
          },
          {
            path: 'YouthMeetYouthDayCelebration',
            data: { breadcrumb: 'YouthMeetYouthDayCelebration' },
            loadComponent: () =>
              import(
                './features/wings/youth/YouthMeetYouthDayCelebration.component'
              ).then((c) => c.YouthMeetYouthDayCelebrationComponent),
          },
          {
            path: 'YouthStudyCircle',
            data: { breadcrumb: 'YouthStudyCircle' },
            loadComponent: () =>
              import('./features/wings/youth/YouthStudyCircle.component').then(
                (c) => c.YouthStudyCircleComponent
              ),
          },
          {
            path: 'SaiSradha',
            data: { breadcrumb: 'SaiSradha' },
            loadComponent: () =>
              import('./features/wings/youth/SaiSradha.component').then(
                (c) => c.SaiSradhaComponent
              ),
          },
          {
            path: 'SriSathyaSaiJagruti',
            data: { breadcrumb: 'SriSathyaSaiJagruti' },
            loadComponent: () =>
              import(
                './features/wings/youth/SriSathyaSaiJagruti.component'
              ).then((c) => c.SriSathyaSaiJagrutiComponent),
          },
          {
            path: 'SummerCourse',
            data: { breadcrumb: 'SummerCourse' },
            loadComponent: () =>
              import('./features/wings/youth/SummerCourse.component').then(
                (c) => c.SummerCourseComponent
              ),
          },
          {
            path: '',
            loadComponent: () =>
              import('./features/wings/youth.component').then(
                (c) => c.YouthComponent
              ),
          },
        ],
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
    path: 'SevaInitiatives',
    data: { breadcrumb: 'SevaInitiatives', link: 0 },
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
        path: 'sssGramaSeva',
        data: { breadcrumb: 'Sri Sathya Sai Grama Seva' },
        loadComponent: () =>
          import('./features/sssGramaSeva.component').then(
            (c) => c.SssGramaSevaComponent
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
    ],
  },
  {
    path: 'sssTrustOdisha',
    data: { breadcrumb: 'sssTrustOdisha', link: 0 },
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
        path: 'SSSBPT',
        data: { breadcrumb: 'SSSBPT' },
        loadComponent: () =>
          import('./features/wings/bookTrust.component').then(
            (c) => c.BookTrustComponent
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
        path: 'sssPrematharu',
        data: { breadcrumb: 'Sri Sathya Sai Prematharu' },
        loadComponent: () =>
          import('./features/sssPrematharu.component').then(
            (c) => c.SssPrematharuComponent
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
      {
        path: 'sssSkillDevelopmentProgram',
        data: { breadcrumb: 'sssSkillDevelopmentProgram' },
        loadComponent: () =>
          import('./features/sssSkillDevelopmentProgram.component').then(
            (c) => c.SSSSkillDevelopmentProgramComponent
          ),
      },
      {
        path: 'TelemedicineCentreThalassemiaclinics',
        data: { breadcrumb: 'TelemedicineCentreThalassemiaclinics' },
        loadComponent: () =>
          import(
            './features/TelemedicineCentreThalassemiaclinics.component'
          ).then((c) => c.TelemedicineCentreThalassemiaclinicsComponent),
      },
      {
        path: 'CardioPulmonaryResuscitation',
        data: { breadcrumb: 'CardioPulmonaryResuscitation' },
        loadComponent: () =>
          import('./features/CardioPulmonaryResuscitation.component').then(
            (c) => c.CardioPulmonaryResuscitationComponent
          ),
      },
      {
        path: 'SaiRehabilitationProgramClinics',
        data: { breadcrumb: 'SaiRehabilitationProgramClinics' },
        loadComponent: () =>
          import('./features/SaiRehabilitationProgramClinics.component').then(
            (c) => c.SaiRehabilitationProgramClinicsComponent
          ),
      },
      {
        path: 'SSSNityaNarayanaSeva',
        data: { breadcrumb: 'SSSNityaNarayanaSeva' },
        loadComponent: () =>
          import('./features/SSSNityaNarayanaSeva.component').then(
            (c) => c.SSSNityaNarayanaSevaComponent
          ),
      },
    ],
  },
  {
    path: 'organization',
    data: { breadcrumb: 'Organization', link: 0 },
    children: [
      {
        path: 'sevaOrgOdisha',
        data: { breadcrumb: 'Seva Organisations' },
        loadComponent: () =>
          import('./features/organization/sevaOrgOdisha.component').then(
            (c) => c.SevaOrgOdishaComponent
          ),
      },
      {
        path: 'messageFromStatePresident',
        data: { breadcrumb: 'messageFromStatePresident' },
        loadComponent: () =>
          import('./features/statePresidentMessage')
            .then((c) => c.StatePresidentMessageComponent),
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
    path: 'institutions',
    data: { breadcrumb: 'Institutions' },
    loadComponent: () =>
      import('./features/institutions.component').then(
        (c) => c.InstitutionsComponent
      ),
  },
  {
    path: 'resources',
    data: { breadcrumb: 'Resources' },
    children: [
      {
        path: 'videos',
        data: { breadcrumb: 'Videos' },
        loadComponent: () =>
          import('./features/resources/Videos.component').then(
            (c) => c.VideosComponent
          ),
      },
      {
        path: 'audio',
        data: { breadcrumb: 'Audio' },
        loadComponent: () =>
          import('./features/resources/Audio.component').then(
            (c) => c.AudioComponent
          ),
      },
      {
        path: 'DigitalLibrary',
        data: { breadcrumb: 'DigitalLibrary' },
        loadComponent: () =>
          import('./features/resources/DigitalLibrary.component').then(
            (c) => c.DigitalLibraryComponent
          ),
      },
      {
        path: 'Wallpapers',
        data: { breadcrumb: 'Wallpapers' },
        loadComponent: () =>
          import('./features/resources/Wallpapers.component').then(
            (c) => c.WallpapersComponent
          ),
      },
      {
        path: 'Presentations',
        data: { breadcrumb: 'Presentations' },
        loadComponent: () =>
          import('./features/resources/Presentations.component').then(
            (c) => c.PresentationsComponent
          ),
      },
      {
        path: 'TeachingAid',
        data: { breadcrumb: 'TeachingAid' },
        loadComponent: () =>
          import('./features/resources/TeachingAid.component').then(
            (c) => c.TeachingAidComponent
          ),
      },
      {
        path: 'BannerDesign',
        data: { breadcrumb: 'BannerDesign' },
        loadComponent: () =>
          import('./features/resources/BannerDesign.component').then(
            (c) => c.BannerDesignComponent
          ),
      },
      {
        path: 'SathyaSaiSpeak',
        data: { breadcrumb: 'SathyaSaiSpeak' },
        loadComponent: () =>
          import('./features/resources/SathyaSaiSpeak.component').then(
            (c) => c.SathyaSaiSpeakComponent
          ),
      },
      {
        path: 'SummerCourse',
        data: { breadcrumb: 'SummerCourse' },
        loadComponent: () =>
          import('./features/resources/resources.component').then(
            (c) => c.ResourcesComponent
          ),
      },
      {
        path: '',
        loadComponent: () =>
          import('./features/resources/resources.component').then(
            (c) => c.ResourcesComponent
          ),
      },
    ],
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
    path: 'ContactUs',
    data: { breadcrumb: 'ContactUs' },
    loadComponent: () =>
      import('./features/ContactUs.component').then(
        (c) => c.ContactUsComponent
      ),
  },
  {
    path: 'PrivacyPolicy',
    data: { breadcrumb: 'PrivacyPolicy' },
    loadComponent: () =>
      import('./features/PrivacyPolicy.component').then(
        (c) => c.PrivacyPolicyComponent
      ),
  },
  {
    path: 'Trademarks',
    data: { breadcrumb: 'Trademarks' },
    loadComponent: () =>
      import('./features/Trademarks.component').then(
        (c) => c.TrademarksComponent
      ),
  },
  {
    path: 'Disclaimer',
    data: { breadcrumb: 'Disclaimer' },
    loadComponent: () =>
      import('./features/Disclaimer.component').then(
        (c) => c.DisclaimerComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/admin/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./features/admin/unauthorized/unauthorized.component').then(
        (c) => c.UnauthorizedComponent
      ),
  },
  {
    path: 'admin',
    data: { breadcrumb: 'Admin' },
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/admin/admin.component').then((c) => c.AdminComponent),
  },
  {
    path: 'dataentry',
    data: { breadcrumb: 'Data Entry' },
    component: DataentryLayoutComponent,
    children: [
      { path: 'saisandesh', component: SaisandeshuploadComponent, canActivate:[RoleGuard], data: { jurisdictions: ['1', '2'] } },
      { path: 'bhajanmandali', component: BmentryComponent, canActivate:[RoleGuard], data: { jurisdictions: ['1', '2'] } },
      { path: 'samithi', component: SamithientryComponent, canActivate:[RoleGuard], data: { jurisdictions: ['1', '2'] }  },
      { path: 'district', component: DistrictentryComponent, canActivate:[RoleGuard], data: { jurisdictions: ['1'] } },
      { path: 'guru', component: GuruentryComponent, canActivate:[RoleGuard], data: { jurisdictions: ['1', '2'] } },
      { path: 'stateofficebearers', component: StateofficebearersentryComponent, canActivate:[RoleGuard], data: { jurisdictions: ['1'] }},
      { path: 'designation', component: DesignationentryComponent, canActivate:[RoleGuard], data: { jurisdictions: ['1']  }},
      { path: 'districtofficebearers', component: DistrictofficebearersentryComponent, canActivate:[RoleGuard], data: { jurisdictions: ['1']  }},
      { path: 'samithiofficebearers', component: SamithiofficebearersentryComponent, canActivate:[RoleGuard], data: { jurisdictions: ['1', '2'] } },
      { path: '', redirectTo: 'bhajanmandali', pathMatch: 'full' },
    ],
  },
  {
    path: 'usercontrol',
    data: { breadcrumb: 'User Control' },
    component: UsercontrolLayoutComponent,
    children: [
      { path: 'dataadmin', component: DataadminentryComponent },
      { path: 'pwdmanagement', component: PasswordmanagementComponent },
    ],
  },
  {
    path: 'eventmanagement',
    data: { breadcrumb: 'Event Management' },
    component: EventLayoutComponent,
    children: [
      { path: 'manageevent', component: EventComponent },
    ],
  },
  {
    path: '**',
    data: { breadcrumb: 'Home' },
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
];
