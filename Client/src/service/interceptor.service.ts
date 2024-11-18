import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (token && token != null) {
      const cloned = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}
