import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(
    public authguardService: AuthguardService,
    public router: Router
  ) {}


  canActivate(): boolean {
    if (!this.authguardService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  public getToken() {
    return localStorage.getItem('token' || '{}');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['./login']);
  }


  


}
