import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css'],
})
export class ProjectDashboardComponent implements OnInit {
  darkMode$ = this.darkModeService.darkMode$;
  @Input() darkModecolor: any;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.darkModeToken();
  }

  toggleDarkTheme(): void {
    this.darkModeService.toggle();
    this.darkModeToken();
  }

  darkModeToken() {
    let darkModeToken = JSON.parse(localStorage.getItem('dark-mode') || '{}');
    if (darkModeToken.darkMode === true) {
      this.darkModecolor = 'background-color: #dfe6e9; color: #2d3436;';
    } else {
      this.darkModecolor = 'background-color: #1c1e28; color: #ffffff;';
    }
  }

  onLogout() {
    this.router.navigate(['./login']);
    return localStorage.removeItem('token');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}
