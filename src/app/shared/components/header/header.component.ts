import {AfterViewInit, Component, ElementRef, inject, ViewChild} from '@angular/core';
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
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{
  translate = inject(TranslateService);
  activeMenu: any = null;
  // @ViewChild('navbarNav') navbarNav!: ElementRef;
  @ViewChild('navbarToggler') navbarToggler!: ElementRef<HTMLButtonElement>;
  collapseInstance: any;
  menus = [
    { name: this.translate.instant('home'), link: '/',showSubMenu: false, },
    {
      name: this.translate.instant('Sri_Sathya_Sai'),
      link: '/Sri_Sathya_Sai',
      subMenu: [
        {
          name: this.translate.instant('Sri_Sathya_Sai_menu_introduction'),
          link: '/introduction',
        },
        {
          name: this.translate.instant('Sri_Sathya_Sai_menu_life'),
          link: '/life',
        },
        { name: 'His Teachings', link: '/teachings' },
        { name: 'His Works', link: '/works' },
      ],
      showSubMenu: false
    },

    {
      name: this.translate.instant('wings'),
      link: '/wings',
      subMenu: [
        { name: this.translate.instant('wings_service'), link: '/service' },
        { name: this.translate.instant('wings_spiritual'), link: '/spiritual' },
        { name: this.translate.instant('wings_education'), link: '/education' },
        { name: this.translate.instant('wings_mahilas'), link: '/ladies' },
        { name: this.translate.instant('wings_youth'), link: '/youth' },
      ],
      showSubMenu: false
    },
    {
      name: this.translate.instant('seva_initiatives'),
      link: '/SevaInitiatives',
      subMenu: [
        { name: 'Holistic Health Care', link: '/holisticHealthCare' },
        { name: 'Institutions', link: '/todo' },
        { name: 'Sri Sathya Sai Grama Seva', link: '/sssGramaSeva' },
        {
          name: 'Sri Sathya Sai Divya Paduka Yatra',
          link: '/sssDivyaPadukaYatra',
        },
        { name: 'Prasanthi Seva', link: '/todo' },
      ],
      showSubMenu: false
    },
    {
      name: 'organization',
      link: '/organization',
      subMenu: [
        {
          name: this.translate.instant('organization_sevaOrgOdisha_menu'),
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
      showSubMenu: false,
    },
    {
      name: this.translate.instant('trust_menu'),
      link: '/sssTrustOdisha',
      subMenu: [
        {
          name: this.translate.instant('sssTrustOdisha_about'),
          link: '/centralTrust',
        },
        { name: 'Sri Sathya Sai Prematharu', link: '/sssPrematharu' },
        { name: 'Sri Sathya Sai Nirmala Jhar', link: '/sssNirmalaJhar' },
        { name: 'Tele Medicine Center', link: '/teleMedicineCenter' },
        { name: 'Sri Sathya Sai Mobile Hospital', link: '/sssMobileHospital' },
        {
          name: 'SSS Skill Development Program',
          link: '/sssSkillDevelopmentProgram',
        },
        {
          name: 'Telemedicine Centre & Thalassemia clinics',
          link: '/TelemedicineCentreThalassemiaclinics',
        },
        {
          name: this.translate.instant('CardioPulmonaryResuscitation'),
          link: '/CardioPulmonaryResuscitation',
        },
        {
          name: this.translate.instant('SaiRehabilitationProgramClinics'),
          link: '/SaiRehabilitationProgramClinics',
        },
        {
          name: this.translate.instant('SSSNityaNarayanaSeva'),
          link: '/SSSNityaNarayanaSeva',
        },
        { name: 'Sri Sathya Sai Books and Publications Trust ', link: '/SSSBPT' },

        // { name: 'SSS Trust-Odisha', link: '/centralTrust' }
      ],
      showSubMenu: false
    },
    {
      name: this.translate.instant('institutions'),
      // link: '/sssSchoolOdisha',
      link: '/institutions',
      showSubMenu: false
      // subMenu: [
      //           { name: 'SSS Trust-Odisha', link: '/centralTrust' },

      // ],
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
      showSubMenu: false,
    },
    { name: this.translate.instant('reports'), link: '/report', showSubMenu: false, },
    { name: 'events_announcement', link: '/events', showSubMenu: false, },
    { name: 'Admin', link: '/admin', showSubMenu: false, },
  ];
  bellIcon = faBell;
  signin = faSignIn;
  signup = faUserPlus;
  constructor(private router: Router) {}

  public changeLanguage(language: string): void {
    this.translate.use(language);
  }

  ngAfterViewInit() {
    // Initialize Bootstrap collapse instance programmatically
    this.collapseInstance = new (window as any).bootstrap.Collapse(
      document.getElementById('navbarNav'),
      { toggle: false }
    );
  }

  toggleSubMenu(topMenu: any): void {
    // Close other submenus except the one clicked
    this.menus.forEach(menu => {
      if (menu.subMenu && menu !== topMenu) {
        menu.showSubMenu = false;
      }
    });

    // Toggle clicked submenu
    if (topMenu.subMenu) {
      topMenu.showSubMenu = !topMenu.showSubMenu;
    }
    // Do NOT close the navbar collapse here
  }

  onMenuClickWithoutSubMenu(): void {
    // Close any open submenu
    this.menus.forEach(menu => {
      if (menu.subMenu) {
        menu.showSubMenu = false;
      }
    });

    // Close the mobile navbar collapse menu
    if (this.collapseInstance) {
      this.collapseInstance.hide();
    }
  }

  onSubMenuClick(): void {
    // Close the mobile navbar collapse menu on submenu click
    if (this.collapseInstance) {
      this.collapseInstance.hide();
    }
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
