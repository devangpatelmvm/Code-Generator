import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AuthguardService {
  constructor(public jwtHelper: JwtHelperService) {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token') || '{}';
    // Check whether the token is expired and return true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
