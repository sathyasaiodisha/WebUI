import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const RoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const jwtHelper = new JwtHelperService();
  const token = sessionStorage.getItem('authToken');

  if (!token || jwtHelper.isTokenExpired(token)) {
    router.navigate(['/login']);
    return false;
  }

  // Extract user role from JWT
  const decodedToken: any = jwtHelper.decodeToken(token);
  const userRole = decodedToken?.juris as string;
  const allowedRoles = route.data['jurisdictions'] as string[];
  console.log("User Role" + userRole);
  console.log("Allowed Roles" + allowedRoles);

  if (userRole != '' && allowedRoles.includes(userRole)) {
    console.log("here");
    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};