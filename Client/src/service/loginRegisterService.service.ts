import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, catchError, throwError, retry } from 'rxjs';
import { LoginUser, RegisterUser } from 'src/models/loginuser';

@Injectable({
  providedIn: 'root',
})
export class LoginRegisterService {
  loginUserUrl: string = 'http://localhost:3000/loginUser';
  registerUserUrl: string = `http://localhost:3000/createUser`;
  constructor(private httpClient: HttpClient, public router: Router) {}

  public userRegister(RegisterUser: RegisterUser): Observable<RegisterUser> {
    return this.httpClient
      .post<RegisterUser>(this.registerUserUrl, RegisterUser)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  //  For Login
  token: string
  public loginUser(LoginUser: LoginUser): Observable<LoginUser> {
    return this.httpClient.post<LoginUser>(this.loginUserUrl, LoginUser )
      .pipe(map((res) => {
        localStorage.setItem('token', res.token )
        return res;
      })
      );
  }
}
