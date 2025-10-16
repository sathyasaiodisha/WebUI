import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent {
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
  }