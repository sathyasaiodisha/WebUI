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
        { name: 'Introduction', link: '/1' },
        { name: 'His Life', link: '/2' },
        { name: 'His Teachings', link: '/3' },
        { name: 'His Works', link: '/4' },
      ],
    },

    {
      name: 'wings',
      link: '/wings',
      subMenu: [
        { name: 'Service', link: '/1' },
        { name: 'Spiritual', link: '/2' },
        { name: 'Education', link: '/3' },
        { name: 'Ladies', link: '/4' },
        { name: 'Youth', link: '/5' },
        { name: 'Holistic Health Care', link: '/6' },
        { name: 'Tele Medicine Center', link: '/7' },
        { name: 'Book Trust', link: '/8' },
        { name: 'Institutions', link: '/9' },
        { name: 'SSSVIP', link: '/10' },
        { name: 'Prasanthi Seva', link: '/11' },
      ],
    },
    {
      name: 'organization',
      link: '/organization',
      subMenu: [
        { name: 'Sri Sathya Sai Central Trust', link: '/1' },
        { name: 'Sri Sathya Sai Seva Organisations, Odisha', link: '/2' },
        { name: 'State Coordinators', link: '/3' },
        { name: 'State In-Charges', link: '/4' },
        { name: 'District Presidents', link: '/5' },
        { name: 'District Youth Coordinator', link: '/6' },
        { name: 'District Digital Archive Coordinator', link: '/7' },
        { name: 'District Office Bearers', link: '/8' },
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
