import { ApiService } from '../../Services/apiservice.service';
import { NotificationService } from '../../Services/notification.service';
import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Login, Register } from 'src/app/Models/models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl = null;
  formSubmitted:boolean = false;

  loginType: boolean;
  successfull: boolean;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) {
    if (this.router.url.indexOf('register') > -1) this.loginType = false;
    else this.loginType = true;
  }

  ngOnInit(): void {
    if (!this.loginType) {
      this.formGroup = new FormGroup(
        {
          email: new FormControl(null, [Validators.email, Validators.required]),
          password: new FormControl(null, Validators.required),
          confirmPassword: new FormControl(null, [Validators.required]),
        },
        [this.checkPasswords]
      );
      this.email = this.formGroup.get('email');
      this.password = this.formGroup.get('password');
      this.confirmPassword = this.formGroup.get('confirmPassword');
    } else {
      this.formGroup = new FormGroup({
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, Validators.required),
      });
      this.email = this.formGroup.get('email');
      this.password = this.formGroup.get('password');
    }
  }

  submitCredentials() {
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      if (!this.loginType) {
        this.apiService
          .register(new Register(this.formGroup.value))
          .subscribe(
            (response) => {
              console.log(response);
            },
            (err: HttpErrorResponse) => {
              console.log(err);
              this.notificationService.showError(err.message, err.name);
            },
            () => {
              this.notificationService.showSuccess(
                'Registration Sucessfull',
                'Success'
              );
              this.formGroup.reset();
              this.router.navigateByUrl('/login');
            }
          );
      } else {
        this.apiService
          .login(new Login(this.formGroup.value))
          .subscribe(
            (response) => {
              console.log(response);
              if(response['accessToken']==null){
                this.notificationService.showError("Wrong Credentials or Not Registered","Error");
                throw new HttpErrorResponse({status:401});
              }
              localStorage.setItem('access_token', response['accessToken']);
              localStorage.setItem('userId', response['userId']);
              localStorage.setItem('userName',response['userName']);
            },
            (err: HttpErrorResponse) => {
              this.notificationService.showError(err.message, err.status);
            },
            () => {
              this.notificationService.showSuccess('Logged In', 'Success');
              this.formSubmitted = false;
              this.formGroup.reset();
              this.router.navigateByUrl('');
            }
          );
      }
    }
  }

  checkPasswords(formGroup: FormGroup): { [key: string]: any } | null {
    if (
      formGroup.get('password').value !== formGroup.get('confirmPassword').value
    ) {
      return {
        notSame: true,
      };
    }

    return null;
  }

  checkValid(controlName: string) {
    return (
      (this.formGroup.get(controlName).hasError('required') &&
        this.formGroup.get(controlName).touched) ||
      (this.formGroup.get(controlName).untouched &&
        this.formSubmitted &&
        this.formGroup.get(controlName).hasError('required'))
    );
  }
}
