import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from "../services/auth.service";
import {Observable, of} from "rxjs";
import {catchError, switchMap, tap} from "rxjs/operators";
import {SnackbarService} from "../services/snackbar.service";
import {StorageService} from "../services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.isAuthenticated().pipe(
      catchError(e => {
        if (e.status === 401) {
          this.router.navigate(['/login']);
          this.storage.removeAuthData();
          return of (false);
        } else {
          this.snackbar.open('We have run into a problem. Try again later')
          return of (true);
        }

      }),
      switchMap(() => of (true))
    )
  }
}
