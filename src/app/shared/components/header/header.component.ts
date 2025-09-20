import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

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
      name: 'wings',
      link: '/wings',
      subMenu: [
        { name: 'Service', link: '/service' },
        { name: 'Spiritual', link: '/spiritual' },
        { name: 'Education', link: '/education' },
        { name: 'Ladies', link: '/ladies' },
        { name: 'Youth', link: '/youth' },
        { name: 'Holistic Health Care', link: '/holisticHealthCare' },
        { name: 'Tele Medicine Center', link: '/teleMedicineCenter' },
        { name: 'Book Trust', link: '/bookTrust' },
        { name: 'Institutions', link: '/todo' },
        { name: 'SSSVIP', link: '/todo' },
        { name: 'Prasanthi Seva', link: '/todo' },
      ],
    },
    {
      name: 'organization',
      link: '/organization',
      subMenu: [
        { name: 'Sri Sathya Sai Central Trust', link: '/centralTrust' },
        {
          name: 'Sri Sathya Sai Seva Organisations, Odisha',
          link: '/sevaOrgOdisha',
        },
        { name: 'State Coordinators', link: '/stateCoordinators' },
        { name: 'State In-Charges', link: '/sic' },
        { name: 'District Presidents', link: '/districtPresidents' },
        { name: 'District Coordinator', link: '/districtCoordinator' },
        //{ name: 'District Digital Archive Coordinator', link: '/7' },
        { name: 'District Office Bearers', link: '/samithis' },
        { name: 'Bhajan Mandalis', link: '/bhajanMandalis' },
        { name: 'Samithi Convenors', link: '/samithiConvenors' },
        { name: 'Resource Persons', link: '/9' },
      ],
    },
    {
      name: 'resources',
      link: '/resources',
      subMenu: [
        { name: 'Videos', link: '/videos' },
        { name: 'Audio', link: '/2' },
        { name: 'Teaching Aid', link: '/3' },
        { name: 'Presentations', link: '/4' },
        { name: 'Photos', link: '/5' },
        { name: 'Wallpapers', link: '/6' },
        { name: 'Miracles', link: '/7' },
        { name: 'Experiences', link: '/8' },
        { name: 'Sathya Sai Speak', link: '/9' },
      ],
    },
    { name: 'Report', link: '/report' },
    { name: 'events_announcement', link: '/events' },
    { name: 'Admin', link: '/admin' },
  ];
  bellIcon = faBell;
  constructor(
    public translateService: TranslateService,
    private router: Router
  ) {}
  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }

  get isHomePage(): boolean {
    return this.router.url == '/';
  }
}
