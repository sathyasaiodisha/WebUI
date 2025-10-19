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
  selector: 'app-usercontrol-layout',
  imports: [MatSidenavModule, MatListModule, MatToolbarModule, RouterOutlet, RouterModule, CommonModule, AdminheaderComponent, MatIconModule,MatTooltipModule],
  templateUrl: './usercontrol-layout.component.html',
  styleUrl: './usercontrol-layout.component.scss'
})
export class UsercontrolLayoutComponent {
  showLogout: boolean = false;

  constructor(private authSvc: AuthService) {}

  navLinks =[
  { path: 'dataadmin', label: 'Data Admin'},
  { path: 'pwdmanagement', label: 'Manage password'}
 ];

  ngOnInit(): void {
    this.showLogout = this.authSvc.isLoggedIn();
  }

   logout(): void
  {
    this.authSvc.logout();
  }
}
