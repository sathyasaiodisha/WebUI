import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authSvc = inject(AuthService);
  const jwtHelper = new JwtHelperService();
  const token = localStorage.getItem('authToken');

  if (token && !jwtHelper.isTokenExpired(token)) {
    return true; // Token valid → allow navigation
  }

  if (!authSvc.isLoggedIn()) {
    router.navigate(['/login'], { queryParams: { redierectTo: '/admin' }});
    return false;
  }

  return true;
};

export const AdminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authSvc = inject(AuthService);

  if (authSvc.getJurisdiction() !== 'admin') {
    router.navigate(['/not-authorized']);
    return false;
  }

  return true;
}
