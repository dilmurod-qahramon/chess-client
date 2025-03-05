import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { TokenService } from '../../auth/services/token.service';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.tokenService.getAccessToken();
    let authReq = req;
    if (accessToken) {
      authReq = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
      });
    }

    return next.handle(authReq).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.retryWithRefreshToken(req, next);
        }
        return throwError(() => error);
      })
    );
  }

  retryWithRefreshToken(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const refreshToken = this.tokenService.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('No refreshToken is found!'));
    }

    return this.authService.getNewAccessToken(refreshToken).pipe(
      switchMap((res) => {
        this.tokenService.setAccessToken(res.accessToken);
        this.tokenService.setRefreshToken(res.refreshToken);

        const newAuthReq = req.clone({
          headers: req.headers.append(
            'Authorization',
            `Bearer ${res.accessToken}`
          ),
        });

        return next.handle(newAuthReq);
      }),
      catchError((error) => {
        this.tokenService.removeTokens();
        this.router.navigate(['/login']);
        return throwError(() => error);
      })
    );
  }
}
