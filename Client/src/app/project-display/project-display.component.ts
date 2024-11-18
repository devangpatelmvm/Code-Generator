import { ProjectDeleteDialogboxComponent } from './../project-delete-dialogbox/project-delete-dialogbox.component';
import { Component, Input, OnInit } from '@angular/core';
import { projectDetails } from '../../models/tree';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';

import { MatDialog } from '@angular/material/dialog';
import { DarkModeService } from 'angular-dark-mode';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest,} from '@angular/common/http';
import { ProjectDetailsService } from './../../service/project-details.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css'],
})
export class ProjectDisplayComponent implements OnInit, AfterViewInit {
  darkMode$ = this.darkModeService.darkMode$;
  dataSource = new MatTableDataSource<projectDetails>();
  message: any;
  id: number;
  token: any;
  @Input() darkModecolor: any;
  typeSelected: string;
  spinner: any;

  progress: any;
  progressStatus: boolean;
  idProgessBar: number;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private darkModeService: DarkModeService,
    private projectDetailsService: ProjectDetailsService,
    private spinnerService: NgxSpinnerService
  ) {
    this.typeSelected = 'ball-fussion';
  }
  data: projectDetails[] = [];
  displayedColumns: string[] = [
    'projectName',
    'uiModules',
    'backendModules',
    'action',
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.projectList();
    this.darkModeToken();
    this.progressStatus = false;
  }

  public showSpinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 5000); // 5 seconds
  }

  projectList() {
    this.token = localStorage.getItem('token') || '{}';
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    let data = {
      userId: decodedToken.id,
    };
   
    this.projectDetailsService.projectList().subscribe((res: any) => {
      this.dataSource.data = res.data;
    });
  }

  darkModeToken() {
    let darkModeToken = JSON.parse(localStorage.getItem('dark-mode') || '{}');
    if (darkModeToken.darkMode === true) {
      this.darkModecolor = 'background-color: #dfe6e9; color: #2d3436;';
    } else {
      this.darkModecolor = 'background-color: #1c1e28; color: #ffffff;';
    }
  }

  styleObject(): Object {
    let darkModeToken = JSON.parse(localStorage.getItem('dark-mode') || '{}');
    if (darkModeToken.darkMode === false) {
      return { backgroundColor: '#1c1e28', color: '#ffffff' };
    }
    return {};
  }

  download(id: number, projectName: string): void {
    this.idProgessBar = id;
    const token = localStorage.getItem('token') || '{}';
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
    let headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    let bodyContent = JSON.stringify({
      id: decodedToken.id,
      projectId: id,
    });
    this.progressStatus = true;
    fetch('http://localhost:3000/downloadProject', {
      method: 'POST',
      body: bodyContent,
      headers: headersList,
    })
      .then(function (response) {
        return response.arrayBuffer();
      })
      .then((data) => {
        console.log(data);
        let binaryData = [];
        binaryData.push(data);
        let downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(
          new Blob([data], { type: 'application/zip' }));
        downloadLink.setAttribute('download', projectName);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        this.progressStatus = false;
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(element: any) {
    const dialogRef = this.dialog.open(ProjectDeleteDialogboxComponent, {
      data: element,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.projectList();
    });
  }
}
