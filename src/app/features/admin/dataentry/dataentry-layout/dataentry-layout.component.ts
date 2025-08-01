import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dataentry-layout',
  imports: [MatSidenavModule, MatListModule, MatToolbarModule, RouterOutlet, RouterModule, CommonModule],
  templateUrl: './dataentry-layout.component.html',
  styleUrl: './dataentry-layout.component.scss'
})
export class DataentryLayoutComponent {
 navLinks =[
  { path: 'district', label: 'District'},
  { path: 'samithi', label: 'Samithi'},
  { path: 'bhajanmandali', label: 'Bhajan Mandali'},
  { path: 'guru', label: 'Guru'},
  { path: 'stateinfo', label: 'State Information'},
  { path: 'districtinfo', label: 'District Information'},
  { path: 'samithiinfo', label: 'Samithi Information'},
  { path: 'bhajanmandaliinfo', label: 'Bhajan Mandal Informaion'},
  { path: 'guruinfo', label: 'Guru Information'},
  { path: 'designation', label: 'Designation'},
  { path: 'resourceperson', label: 'Resource Person'},
  { path: 'changerequest', label: 'Change Request'},
  { path: 'lastupdate', label: 'Last Update'}
 ];
}
