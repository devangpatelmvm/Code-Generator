import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';
import { RegisterUser } from 'src/models/loginuser';
import { LoginRegisterService } from 'src/service/loginRegisterService.service';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: RegisterUser;
  @Input() darkModecolor: any;
  darkMode$ = this.darkModeService.darkMode$;
  errorMsg: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private darkModeService: DarkModeService,
    private loginRegisterService: LoginRegisterService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.darkModeToken();
    this.createRegristrationForm();
  }

  darkModeToken() {
    let darkModeToken = JSON.parse(localStorage.getItem('dark-mode') || '{}');
    if (darkModeToken.darkMode === true) {
      this.darkModecolor = 'background-color: #dfe6e9; color: #2d3436;';
    } else {
      this.darkModecolor = 'background-color: #1c1e28; color: #ffffff;';
    }
  }

  createRegristrationForm() {
    this.registrationForm = this.formBuilder.group(
      {
        first_name: [null, [Validators.required, Validators.minLength(3)]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirmPassword: [null, Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  get first_name() {
    return this.registrationForm.get('first_name') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  data: RegisterUser[] = [];
  onSubmit() {
    if (this.registrationForm.valid) {
      let data = {
        email: this.email.value,
        password: this.password.value,
        first_name: this.first_name.value,
        last_name: 'grey',
      };
      this.loginRegisterService.userRegister(data).subscribe(
        (res) => {
          this.data.push(res);
          this.registrationForm.reset();
          this.openSnackBar('Registration Done', ''),
            {
              duration: 2000,
            };
          setTimeout(() => {
            this.router.navigate(['./login']);
          }, 2000);
        },
        (error: HttpErrorResponse) => {
          this.errorMsg = error.error.errorMsg;
          alert(this.errorMsg);
        }
      );
    }
  }

  // Notification
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: ['custom-style'],
    });
  }
}
