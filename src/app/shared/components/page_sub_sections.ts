import { Component, OnInit, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

type linkMap = { name: string; url: string }[];
type pageMap = {
  title: string;
  description: string;
  links: linkMap;
};
type AllpageMap = Record<string, pageMap>;
@Component({
  selector: 'app-sub-sections-links',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <h3>{{ title }}</h3>
    <p>
      {{ description }}
    </p>

    <div class="sub_wing_wrapper_bottom">
      @for(link of links; track $index;){
      <button
        type="button"
        [routerLink]="link.url"
        routerLinkActive="active"
        class="btn btn-light"
      >
        {{ link.name }}
      </button>
      }
    </div>
  `,
})
export class SubSectionComponent implements OnInit {
  @Input() page: string = '';
  translate = inject(TranslateService);

  allLinks: AllpageMap = {
    wings_service: {
      title: 'Key Activities of the Service Wing',
      description: '',
      links: [
        {
          name: this.translate.instant('NarayanaSeva'),
          url: '/wings/service/NarayanaSeva',
        },
        {
          name: this.translate.instant('TribalVillageProgramme'),
          url: '/wings/service/TribalVillageProgramme',
        },
        {
          name: this.translate.instant('JalaChhatraSeva'),
          url: '/wings/service/JalaChhatraSeva',
        },
        {
          name: this.translate.instant('AmrutaKalasam'),
          url: '/wings/service/AmrutaKalasam',
        },
        {
          name: this.translate.instant('NityaNarayanaSeva'),
          url: '/wings/service/NityaNarayanaSeva',
        },
        {
          name: this.translate.instant('HolisticHealthCare'),
          url: '/wings/service/HolisticHealthCare',
        },
        {
          name: this.translate.instant('SaiSwabalambi'),
          url: '/wings/service/SaiSwabalambi',
        },
        {
          name: this.translate.instant('BloodDonation'),
          url: '/wings/service/BloodDonation',
        },
        {
          name: this.translate.instant('rvtc'),
          url: '/wings/service/rvtc',
        },
        {
          name: this.translate.instant('SwachhatwaRuDivyatwa'),
          url: '/wings/service/SwachhatwaRuDivyatwa',
        },
        {
          name: this.translate.instant('SanitationSeva'),
          url: '/wings/service/SanitationSeva',
        },
        {
          name: this.translate.instant('AgriCare'),
          url: '/wings/service/AgriCare',
        },
        {
          name: this.translate.instant('SriSathyaSaiHousingProject'),
          url: '/wings/service/SriSathyaSaiHousingProject',
        },
        {
          name: this.translate.instant('SriSathyaSaiWaterProject'),
          url: '/wings/service/SriSathyaSaiWaterProject',
        },
        {
          name: this.translate.instant('DisasterManagement'),
          url: '/wings/service/DisasterManagement',
        },
        {
          name: this.translate.instant('SriSathyaSaiSudarshan'),
          url: '/wings/service/SriSathyaSaiSudarshan',
        },
        {
          name: this.translate.instant('PrasanthiSeva'),
          url: '/wings/service/PrasanthiSeva',
        },

        // { name: 'Animal care', url: '/wings/service/Animalcare' },
        // { name: 'Digital archive', url: '/wings/service/Digitalarchive' },
        // {
        //   name: 'Digital connectivity',
        //   url: '/wings/service/digitalConnectivity',
        // },
        // { name: 'Holistic health', url: '/wings/service/Holistichealth' },
        // { name: 'Sri Sathya Sai Grama Seva', url: '/wings/service/SSSVIP' },
        // { name: 'SSSHP', url: '/wings/service/SSSHP' },
        // { name: 'Telemedicine', url: '/wings/service/Telemedicine' },
        // { name: 'Service Activities', url: '/wings/service/ServiceActivities' },
      ],
    },
    wings_spiritual: {
      title: 'Key Activities of the Spiritual Wing',
      description:
        'The Spiritual Wing organizes activities at local centers (Samithis), district levels, and national/international events. These are designed          to inspire inward vision and collective devotion',
      links: [
        { name: 'Sai Symphony', url: '/wings/spiritual/saiSymphony' },
        { name: 'Veda Prabaham', url: '/wings/spiritual/vedaPrabaham' },
        { name: 'Bhajan', url: '/wings/spiritual/bhajan' },
        { name: 'Study circle', url: '/wings/spiritual/studyCircle' },
        { name: 'Parthi Yatra', url: '/wings/spiritual/parthiYatra' },
        { name: 'Jyothi Yatra', url: '/wings/spiritual/jyothiYatra' },
        { name: 'Lakshyarchana', url: '/wings/spiritual/Lakshyarchana' },
        { name: 'Sadhana Shibir', url: '/wings/spiritual/sadhanaShibir' },
        { name: 'Vahini Parayana', url: '/wings/spiritual/vahiniParayana' },
        { name: 'Devotees meet', url: '/wings/spiritual/devoteesMeet' },
        { name: 'Dhyana Briksha ', url: '/wings/spiritual/dhyanaVrukshya' },
        { name: 'Seminars', url: '/wings/spiritual/seminars' },
        { name: 'Swadhyaya', url: '/wings/spiritual/swadhyaya' },
        {
          name: 'Celebration of Festivals',
          url: '/wings/spiritual/celebrationOfFestivals',
        },
      ],
    },
    wings_youth: {
      title: 'Youth Wing Activities',
      description:
        'Explore the various activities and programs conducted by the Youth Wing to foster devotion and self-transformation.',
      links: [
        {
          name: this.translate.instant('NationalInitiatives'),
          url: '/wings/youth/NationalInitiatives',
        },
        {
          name: this.translate.instant('PracticingCod'),
          url: '/wings/youth/PracticingCod',
        },
        {
          name: this.translate.instant('MaintainingOfSpiritualDairy'),
          url: '/wings/youth/MaintainingOfSpiritualDairy',
        },
        {
          name: this.translate.instant('YouthMeetYouthDayCelebration'),
          url: '/wings/youth/YouthMeetYouthDayCelebration',
        },
        {
          name: this.translate.instant('YouthStudyCircle'),
          url: '/wings/youth/YouthStudyCircle',
        },
        {
          name: this.translate.instant('SaiSradha'),
          url: '/wings/youth/SaiSradha',
        },
        {
          name: this.translate.instant('SriSathyaSaiJagruti'),
          url: '/wings/youth/SriSathyaSaiJagruti',
        },
        {
          name: this.translate.instant('SummerCourse'),
          url: '/wings/youth/SummerCourse',
        },
      ],
    },
    wings_ladies: {
      title: 'Mahilas Wing Activities',
      description:
        'Explore the various activities and programs conducted by the Mahilas Wing to foster devotion and self-transformation.',
      links: [
        {
          name: this.translate.instant('SaktiSwaroopiniDiwas'),
          url: '/wings/ladies/SaktiSwaroopiniDiwas',
        },
        {
          name: this.translate.instant('SaiBratakalpa'),
          url: '/wings/ladies/SaiBratakalpa',
        },
        {
          name: this.translate.instant('LalitaSahasraNama'),
          url: '/wings/ladies/LalitaSahasraNama',
        },
        {
          name: this.translate.instant('KumkumaPujaArchana'),
          url: '/wings/ladies/KumkumaPujaArchana',
        },
        {
          name: this.translate.instant('BaralaxmiBrata'),
          url: '/wings/ladies/BaralaxmiBrata',
        },
        {
          name: this.translate.instant('SaiSanatani'),
          url: '/wings/ladies/SaiSanatani',
        },
        {
          name: this.translate.instant('SaiPremadhara'),
          url: '/wings/ladies/SaiPremadhara',
        },
        {
          name: this.translate.instant('MahilaConvention'),
          url: '/wings/ladies/MahilaConvention',
        },
        {
          name: this.translate.instant('MahilaBhajanSatsangStudyCircle'),
          url: '/wings/ladies/MahilaBhajanSatsangStudyCircle',
        },
      ],
    },
    wings_education: {
      title: 'Education Wing Activities',
      description:
        'Explore the various activities and programs conducted by the Education Wing to foster devotion and self-transformation.',
      links: [
        {
          name: this.translate.instant('SriSathyaSaiBalVikas'),
          url: '/wings/education/SriSathyaSaiBalVikas',
        },
        {
          name: this.translate.instant('SriSathyaSaiVidyaJyothi'),
          url: '/wings/education/SriSathyaSaiVidyaJyothi',
        },
        {
          name: this.translate.instant('NityaSikshyaDana'),
          url: '/wings/education/NityaSikshyaDana',
        },
        {
          name: this.translate.instant('VidyaVahini'),
          url: '/wings/education/VidyaVahini',
        },
        {
          name: this.translate.instant('FestivalsOfJoy'),
          url: '/wings/education/FestivalsOfJoy',
        },
        {
          name: this.translate.instant('AnandaUdyan'),
          url: '/wings/education/AnandaUdyan',
        },
        {
          name: this.translate.instant('MadhuVadishyami'),
          url: '/wings/education/MadhuVadishyami',
        },
        {
          name: this.translate.instant('SaiVaatika'),
          url: '/wings/education/SaiVaatika',
        },
        {
          name: this.translate.instant('ManmanaaBhava'),
          url: '/wings/education/ManmanaaBhava',
        },
        {
          name: this.translate.instant('FestivalsFlavours'),
          url: '/wings/education/FestivalsFlavours',
        },
        {
          name: this.translate.instant('SSSCHumanExcellence'),
          url: '/wings/education/SSSCHumanExcellence',
        },
        {
          name: this.translate.instant('TeachingAid'),
          url: '/resources/TeachingAid',
        },
        {
          name: this.translate.instant('DigitalLibrary'),
          url: '/resources/DigitalLibrary',
        },
      ],
    },
  };
  links: linkMap = [];
  title: string = '';
  description: string = '';
  ngOnInit(): void {
    if (this.page in this.allLinks) {
      this.links = this.allLinks[this.page].links ?? [];
      this.title = this.allLinks[this.page].title ?? '';
      this.description = this.allLinks[this.page].description ?? '';
    } else {
      this.links = [];
    }
  }
}
