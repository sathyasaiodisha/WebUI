import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faSignIn,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  translate = inject(TranslateService);

  menus = [
    {
      name: 'Sri Sathya Sai',
      link: '/Sri_Sathya_Sai',
      subMenu: [
        { name: 'Introduction', link: '/introduction' },
        { name: 'His Life', link: '/life' },
        { name: 'His Teachings', link: '/teachings' },
        { name: 'His Works', link: '/works' },
      ],
    },

    {
      name: 'Wings',
      link: '/wings',
      subMenu: [
        { name: 'Service', link: '/service' },
        { name: 'Spiritual', link: '/spiritual' },
        { name: 'Education', link: '/education' },
        { name: 'Mahilas', link: '/ladies' },
        { name: 'Youth', link: '/youth' },
      ],
    },
    {
      name: 'Seva Initiatives',
      link: '/SevaInitiatives',
      subMenu: [
        { name: 'Holistic Health Care', link: '/holisticHealthCare' },
        { name: 'Book Trust', link: '/bookTrust' },
        { name: 'Institutions', link: '/todo' },
        { name: 'Sri Sathya Sai Grama Seva', link: '/sssGramaSeva' },
        {
          name: 'Sri Sathya Sai Divya Paduka Yatra',
          link: '/sssDivyaPadukaYatra',
        },
        { name: 'Prasanthi Seva', link: '/todo' },
      ],
    },
    {
      name: 'organization',
      link: '/organization',
      subMenu: [
        {
          name: 'About SSSSO-Odisha',
          link: '/sevaOrgOdisha',
        },
        { name: 'State Coordinators', link: '/stateCoordinators' },
        { name: 'State In-Charges', link: '/sic' },
        { name: 'District Presidents', link: '/districtPresidents' },
        { name: 'District Coordinator', link: '/districtCoordinator' },
        //{ name: 'District Digital Archive Coordinator', link: '/7' },
        { name: 'Samithi List', link: '/samithis' },
        //{ name: 'Resource Persons', link: '/todo' },
        { name: 'Samithi Convenors', link: '/samithiConvenors' },
        { name: 'Bhajan Mandalis', link: '/bhajanMandalis' },
      ],
    },
    {
      name: 'resources',
      link: '/resources',
      subMenu: [
        { name: 'Videos', link: '/videos' },
        { name: 'Audio', link: '/audio' },
        {
          name: this.translate.instant('DigitalLibrary'),
          link: '/DigitalLibrary',
        },
        { name: 'Teaching Aid', link: '/TeachingAid' },
        { name: 'Presentations', link: '/Presentations' },
        { name: 'Banner Design', link: '/BannerDesign' },
        { name: 'Photos', link: '/todo' },
        { name: 'Wallpapers', link: '/Wallpapers' },
        { name: 'Miracles', link: '/todo' },
        { name: 'Experiences', link: '/todo' },
        { name: 'Sathya Sai Speak', link: '/SathyaSaiSpeak' },
      ],
    },
    {
      name: 'SSS Schools, Odisha',
      link: '/sssSchoolOdisha',
      // subMenu: [
      //           { name: 'SSS Trust-Odisha', link: '/centralTrust' },

      // ],
    },
    {
      name: 'SSS Trust, Odisha',
      link: '/sssTrustOdisha',
      subMenu: [
        { name: 'Sri Sathya Sai Prematharu', link: '/sssPrematharu' },
        { name: 'Sri Sathya Sai Nirmala Jhar', link: '/sssNirmalaJhar' },
        { name: 'Tele Medicine Center', link: '/teleMedicineCenter' },
        { name: 'Sri Sathya Sai Mobile Hospital', link: '/sssMobileHospital' },

        // { name: 'SSS Trust-Odisha', link: '/centralTrust' }
      ],
    },
    { name: 'Report', link: '/report' },
    { name: 'events_announcement', link: '/events' },
    //{ name: 'Admin', link: '/admin' },
  ];
  bellIcon = faBell;
  signin = faSignIn;
  signup = faUserPlus;
  constructor(private router: Router) {}
  public changeLanguage(language: string): void {
    this.translate.use(language);
  }

  get isHomePage(): boolean {
    return this.router.url == '/';
  }
  images = [
    // '/assets/images/baba-min.jpg',
    'https://wpstatic.ssssoindia.org/wp-content/uploads/2022/04/21110918/1-final-banner.jpg',
    'https://wpstatic.ssssoindia.org/wp-content/uploads/2022/05/01043928/6th-service-banner-updated.jpg',
    'https://wpstatic.ssssoindia.org/wp-content/uploads/2022/04/20110515/5-banner-religious-2.jpg',
  ];
}
