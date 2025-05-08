import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const cookieService = inject(CookieService);
  const token = cookieService.get('auth-token') || 'na';
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        authorization: token,
        //Authorization: `Bearer ${token}`
      },
    });
    return next(cloned);
  } else {
    return next(req);
  }
};
