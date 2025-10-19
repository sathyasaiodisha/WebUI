import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AdminheaderComponent } from '../../../../shared/components/adminheader/adminheader.component';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-dataentry-layout',
  imports: [MatSidenavModule, MatListModule, MatToolbarModule, RouterOutlet, RouterModule, CommonModule, AdminheaderComponent, MatIconModule, MatTooltipModule],
  templateUrl: './dataentry-layout.component.html',
  styleUrl: './dataentry-layout.component.scss'
})
export class DataentryLayoutComponent {
  
  showLogout: boolean = false;
  constructor(private authSvc: AuthService) {}

  userJurisdiction: string | null = "";
  navLinks =[
              { path: 'district', label: 'District'},
              { path: 'samithi', label: 'Samithi'},
              { path: 'bhajanmandali', label: 'Bhajan Mandali'},
              { path: 'guru', label: 'Guru'},
              { path: 'stateofficebearers', label: 'State office-bearers'},
              { path: 'districtofficebearers', label: 'District office-bearers'},
              { path: 'samithiofficebearers', label: 'Samithi office-bearers'},
              { path: 'bhajanmandaliofficebearers', label: 'Bhajan Mandali office-bearers'},
              { path: 'guruinfo', label: 'Guru Information'},
              { path: 'designation', label: 'Designation'},
              { path: 'resourceperson', label: 'Resource Person'},
              { path: 'changerequest', label: 'Change Request'},
              { path: 'lastupdate', label: 'Last Update'}
            ];

  ngOnInit(): void {
      this.showLogout = this.authSvc.isLoggedIn();
      this.userJurisdiction = this.authSvc.getJurisdiction();
      console.log(this.userJurisdiction);
      if (this.userJurisdiction != "")
      {
        switch (this.userJurisdiction?.toString())
        {
          case "1":
            this.navLinks =[
                            { path: 'district', label: 'District'},
                            { path: 'samithi', label: 'Samithi'},
                            { path: 'bhajanmandali', label: 'Bhajan Mandali'},
                            { path: 'guru', label: 'Guru'},
                            { path: 'stateofficebearers', label: 'State office-bearers'},
                            { path: 'districtofficebearers', label: 'District office-bearers'},
                            { path: 'samithiofficebearers', label: 'Samithi office-bearers'},
                            { path: 'bhajanmandaliofficebearers', label: 'Bhajan Mandali office-bearers'},
                            { path: 'guruinfo', label: 'Guru Information'},
                            { path: 'designation', label: 'Designation'},
                            { path: 'resourceperson', label: 'Resource Person'},
                            { path: 'changerequest', label: 'Change Request'},
                            { path: 'lastupdate', label: 'Last Update'}
                          ];
            break;

          case "2":
            this.navLinks =[
                        { path: 'samithi', label: 'Samithi'},
                        { path: 'bhajanmandali', label: 'Bhajan Mandali'},
                        { path: 'guru', label: 'Guru'},
                        { path: 'districtofficebearers', label: 'District office-bearers'},
                        { path: 'samithiofficebearers', label: 'Samithi office-bearers'},
                        { path: 'bhajanmandaliofficebearers', label: 'Bhajan Mandali office-bearers'},
                        { path: 'guruinfo', label: 'Guru Information'},
                        { path: 'resourceperson', label: 'Resource Person'},
                        { path: 'changerequest', label: 'Change Request'},
                        { path: 'lastupdate', label: 'Last Update'}
                      ];
            break;

          case "3":
          case "4":
            this.navLinks =[              
                            { path: 'resourceperson', label: 'Resource Person'},
                            { path: 'changerequest', label: 'Change Request'},
                            { path: 'lastupdate', label: 'Last Update'}
                          ];
            break;

          default:
            break;
        }
      }    
  }
  
  logout(): void
  {
  this.authSvc.logout();
  }
}
