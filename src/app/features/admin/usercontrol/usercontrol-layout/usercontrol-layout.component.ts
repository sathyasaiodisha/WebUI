import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AdminheaderComponent } from '../../../../shared/components/adminheader/adminheader.component';

@Component({
  selector: 'app-usercontrol-layout',
  imports: [MatSidenavModule, MatListModule, MatToolbarModule, RouterOutlet, RouterModule, CommonModule, AdminheaderComponent],
  templateUrl: './usercontrol-layout.component.html',
  styleUrl: './usercontrol-layout.component.scss'
})
export class UsercontrolLayoutComponent {
  navLinks =[
  { path: 'dataadmin', label: 'Data Admin'},
  { path: 'pwdmanagement', label: 'Manage password'}
 ];
}
