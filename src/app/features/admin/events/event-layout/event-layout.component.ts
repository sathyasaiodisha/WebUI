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
  selector: 'app-event-layout',
  imports: [MatSidenavModule, MatListModule, MatToolbarModule, RouterOutlet, RouterModule, CommonModule, AdminheaderComponent, MatIconModule,MatTooltipModule],
  templateUrl: './event-layout.component.html',
  styleUrl: './event-layout.component.scss'
})
export class EventLayoutComponent {
    showLogout: boolean = false;
    constructor(private authSvc: AuthService) {}

    navLinks =[
      { path: 'manageevent', label: 'Manage Event'}
    ];

    ngOnInit(): void {
      this.showLogout = this.authSvc.isLoggedIn();
    }

    logout(): void
    {
      this.authSvc.logout();
    }
}
