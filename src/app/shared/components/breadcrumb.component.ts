import { Component, OnInit } from '@angular/core';
import {
  BreadcrumbService,
  Breadcrumb,
} from '../../core/services/breadcrumb.service';
import { RouterLink } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-breadcrumb',
  imports: [SharedModule, RouterLink],
  template: `
    @if(breadcrumbs.length != 0 && breadcrumbs[0].label != 'Home') {
    <nav class="breadcrumb">
      <a routerLink="/">Home</a>
      <span> / </span>
      <ng-container *ngFor="let bc of breadcrumbs; let last = last">
        <a *ngIf="!last && bc.link" [routerLink]="bc.url">{{ bc.label }}</a>
        <span *ngIf="last || !bc.link">{{ bc.label }}</span>
        <span *ngIf="!last"> / </span>
      </ng-container>
    </nav>
    }
  `,
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.getBreadcrumbs().subscribe((bc) => {
      this.breadcrumbs = bc;
    });
  }
}
