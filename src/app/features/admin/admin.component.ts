import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, RouterModule, MatIcon, MatTooltip],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent {
    constructor(private authSvc: AuthService) {}
    userJurisdiction: string | null = "";
    showLogout: boolean = false;

    tiles = [
      { title: 'Data Entry', link: '/dataentry' },
      { title: 'Login', link: '/login' },
      { title: 'Digital Archive', text: '' },
      { title: 'Annual Planner', text: '' },
      { title: 'User Control', link: '/usercontrol' },
      { title: 'Upcoming & Recent Events', text: '' },
      { title: 'Manage resources', text: '' },
      { title: 'Manage quotes', text: '' },
      { title: 'Manage forms', text: '' },
    ];

    ngOnInit(): void {
      if (this.authSvc.isLoggedIn())
      {
        this.showLogout = true;
      }

      this.userJurisdiction = this.authSvc.getJurisdiction();
      console.log(this.userJurisdiction);
      if (this.userJurisdiction != "")
      {
        switch (this.userJurisdiction?.toString())
        {
          case "1":
            this.tiles =[
                          { title: 'Data Entry', link: '/dataentry' },
                          { title: 'Digital Archive', text: '' },
                          { title: 'Annual Planner', text: '' },
                          { title: 'User Control', link: '/usercontrol' },
                          { title: 'Upcoming & Recent Events', text: '' },
                          { title: 'Manage resources', text: '' },
                          { title: 'Manage quotes', text: '' },
                          { title: 'Manage forms', text: '' }
                        ];
            break;

          case "2":
            this.tiles =[
                          { title: 'Data Entry', link: '/dataentry' },
                          { title: 'Digital Archive', text: '' },
                          { title: 'Upcoming & Recent Events', text: '' },
                          { title: 'Manage resources', text: '' },
                          { title: 'Manage quotes', text: '' },
                          { title: 'Manage forms', text: '' }
                        ];
            break;

          case "3":
          case "4":
            this.tiles =[
                          { title: 'Data Entry', link: '/dataentry' },
                          { title: 'Digital Archive', text: '' },
                          { title: 'Manage forms', text: '' }
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