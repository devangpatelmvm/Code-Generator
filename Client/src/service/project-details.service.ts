import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, retry } from 'rxjs';
import { projectDetails } from 'src/models/tree';
import { createProject } from 'src/models/tree';
import { createTables } from 'src/models/tree';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsService {

  envcreateProject = 'http://localhost:3000/createProject';
  envcreateTables = 'http://localhost:3000/createTables';
  envgetTableDetails = 'http://localhost:3000/getTableDetails';

  envprojectDetailSave = 'http://localhost:3000/storeProjectDetails';
  projectListUrl: string = 'http://localhost:3000/getProjectByUserId';
  constructor(private httpClient: HttpClient) {}

  public createProject(createProject: any): Observable<createProject> {
    return this.httpClient.post<createProject>(this.envcreateProject, createProject)
      .pipe(retry(1));
  }

  public createTables(createTables: any): Observable<createTables> {
    return this.httpClient.post<createTables>(this.envcreateTables, createTables)
      .pipe(retry(1));
  }
  
  public projectDetailsSave(projectDetails: any): Observable<projectDetails> {
    return this.httpClient.post<projectDetails>(this.envprojectDetailSave, projectDetails)
      .pipe(retry(1));
  }

  public projectList() {
    return this.httpClient.get<any>(this.projectListUrl).pipe(retry(1));
  }

  
  
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
