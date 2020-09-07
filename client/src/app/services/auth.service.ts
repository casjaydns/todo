import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { APIs } from "../../environments/apis";
import {StorageService} from "./storage.service";
import {catchError, map, tap} from "rxjs/operators";
import {of, throwError} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  signup(data) {
    return this.http.post(APIs.signup(), data);
  }

  login(data) {
    return this.http.post<{user: User, accessToken: string, refreshToken: string}>(APIs.login(), data);
  }

  isAuthenticated() {
    return this.http.get(APIs.authorization());
  }

  refreshTokens() {
    return this.http.post(APIs.refreshTokens(this.storage.getUserId()), null,
      {headers: {Refresh: this.storage.getRefresh()}}).pipe(
      tap<any>(data => {
        this.storage.setAuthData({userId: data.user._id, jwt: 'Bearer ' + data.newAccessToken, refresh: 'Bearer ' + data.newRefreshToken})
      }),
      catchError(error => {
        if (error.status !== 0) this.storage.removeAuthData();
        return throwError(error);
      })
    )
  }
}
