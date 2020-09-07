import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getAuthData() {
    const userId = localStorage.getItem('userId')
    const jwt = localStorage.getItem('jwt')
    const refresh = localStorage.getItem('refresh')
    return {userId, jwt, refresh};
  }

  getJwt() {
    return localStorage.getItem('jwt');
  }

  getRefresh() {
    return localStorage.getItem('refresh');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  setAuthData({userId, jwt, refresh}) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('refresh', refresh);
  }

  removeAuthData() {
    localStorage.clear();
  }
}
