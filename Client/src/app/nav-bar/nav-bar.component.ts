import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {}
  onLogout() {
    this.router.navigate(['./login']);
    return localStorage.removeItem('token');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }
}
