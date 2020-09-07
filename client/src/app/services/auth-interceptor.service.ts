import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {StorageService} from "./storage.service";
import {catchError, switchMap, tap} from "rxjs/operators";
import {APIs} from "../../environments/apis";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    private auth: AuthService,
    private handler: HttpHandler
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.storage.getJwt()) req = req.clone({setHeaders: {Authorization: this.storage.getJwt()}});

    return next.handle(req).pipe(
      catchError(error => {
        if (error.error.error && error.error.error === 'TokenExpired') {
          return this.auth.refreshTokens().pipe(
            switchMap(() => {
              return this.handler.handle(req);
            })
          )
        } else return throwError(error)
      })
    )
  }
}
