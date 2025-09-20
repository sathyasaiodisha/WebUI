import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: Breadcrumb[] = this.createBreadcrumbs(root);
        this.breadcrumbs$.next(breadcrumbs);
      });
  }

  getBreadcrumbs() {
    return this.breadcrumbs$.asObservable();
  }

  private createBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    if (route.routeConfig && route.routeConfig.data) {
      const breadcrumb: Breadcrumb = {
        label: route.routeConfig.data['breadcrumb'],
        url: `${url}/${route.url.map((segment) => segment.path).join('/')}`,
      };
      breadcrumbs.push(breadcrumb);
    }

    if (route.firstChild) {
      return this.createBreadcrumbs(
        route.firstChild,
        `${url}/${route.url.map((segment) => segment.path).join('/')}`,
        breadcrumbs
      );
    }

    return breadcrumbs;
  }
}
