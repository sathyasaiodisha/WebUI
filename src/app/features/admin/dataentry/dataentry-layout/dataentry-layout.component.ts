import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AdminheaderComponent } from '../../../../shared/components/adminheader/adminheader.component';

@Component({
  selector: 'app-dataentry-layout',
  imports: [MatSidenavModule, MatListModule, MatToolbarModule, RouterOutlet, RouterModule, CommonModule, AdminheaderComponent],
  templateUrl: './dataentry-layout.component.html',
  styleUrl: './dataentry-layout.component.scss'
})
export class DataentryLayoutComponent {
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
}
