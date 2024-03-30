import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { cookieService } from '../services/cookie/cookie.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const httpManagerInterceptor: HttpInterceptorFn = (req, next) => {
  let cookieServiceManager = inject(cookieService);
  let router = inject(Router);
  if(cookieServiceManager.tokenExists()) {
    const token = cookieServiceManager.get();
    req = req.clone({
      headers: req.headers.set('Authorization', token)
    })
  }
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let code = error.error.code;
      if (code == 401) {
        router.navigateByUrl('/');
      }
      return throwError(() => error.error);
    })
  )
};
