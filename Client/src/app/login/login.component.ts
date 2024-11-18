import { Component, Input, OnInit } from '@angular/core';
import {
  NgForm,
  Validators,
  FormBuilder,
  FormControl,
  MinLengthValidator,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { DarkModeService } from 'angular-dark-mode';
import { LoginRegisterService } from 'src/service/loginRegisterService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  darkMode$ = this.darkModeService.darkMode$;
  typeSelected: 'ball-fussion';
  loginForm: FormGroup;
  status: boolean;
  formSubmitted: boolean;
  @Input() darkModecolor: any;
  constructor(
    private loginRegisterService: LoginRegisterService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private spinnerService: NgxSpinnerService,
    private darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.darkModeToken();
    this.validationCheck();
  }

  darkModeToken() {
    let darkModeToken = JSON.parse(localStorage.getItem('dark-mode') || '{}');
    if (darkModeToken.darkMode === true) {
      this.darkModecolor = 'background-color: #dfe6e9; color: #2d3436;';
    } else {
      this.darkModecolor = 'background-color: #1c1e28; color: #ffffff;';
    }
  }

  validationCheck() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginRegisterService.loginUser(this.loginForm.value).subscribe(
        (data) => {
          if (data.status === true) {
            setTimeout(() => {
              this.router.navigate(['./project-dashboard']);
            }, 1500);
          } else {
            setTimeout(() => {
              this.openSnackBar(
                'Email Address And Password Is Incorrect',
                'Cancel'
              ),
                {
                  duration: 3000,
                };
            }, 2000);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      setTimeout(() => {
        this.openSnackBar('Email And Password Is Not Valid', 'Cancel'),
          {
            duration: 3000,
          };
      }, 2000);
    }
  }

  public showSpinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000); // 5 seconds
  }

  // Notification Code
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: ['custom-style'],
    });
  }
}
