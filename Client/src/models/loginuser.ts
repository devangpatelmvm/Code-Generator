import { EmailValidator } from "@angular/forms";

export interface RegisterUser {
    first_name: any;
    email: EmailValidator;
    password: string;
    confirmPassword?: string;
  }

  export interface LoginUser {
    token:any;
    status?:boolean;
    id:number;
    data:any;
    email: EmailValidator;
    password: string;
  }