import { Component, OnInit } from '@angular/core';
import {
  BreadcrumbService,
  Breadcrumb,
} from '../../core/services/breadcrumb.service';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-breadcrumb',
  imports: [SharedModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="breadcrumb">
      <ng-container *ngFor="let bc of breadcrumbs; let last = last">
        <a *ngIf="!last" [routerLink]="bc.url">{{ bc.label }}</a>
        <span *ngIf="last">{{ bc.label }}</span>
        <span *ngIf="!last"> / </span>
      </ng-container>
    </nav>
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
