import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  envgetUsers = 'http://localhost:3000/getUsers';
  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get<any>(this.envgetUsers).pipe(retry(1));
  }


}
