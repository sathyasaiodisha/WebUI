import { Component, OnInit } from '@angular/core';
import {
  BreadcrumbService,
  Breadcrumb,
} from '../../core/services/breadcrumb.service';
import { RouterLink } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [SharedModule, RouterLink],
  template: `
    @if (breadcrumbs.length != 0 && breadcrumbs[0].label != 'Home') {
      <nav class="breadcrumb">
        <a routerLink="/">Home</a>
        <span> / </span>

        @for (bc of breadcrumbs; track bc; let last = $last) {
          @if (!last && bc.link) {
            <a [routerLink]="bc.url">{{ bc.label }}</a>
          } @else {
            <span>{{ bc.label }}</span>
          }

          @if (!last) {
            <span> / </span>
          }
        }
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
