import { UserService } from './../../Services/userservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/models';
import { ApiService } from 'src/app/Services/apiservice.service';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styles: [
  ]
})
export class AdminLoginComponent implements OnInit {
  formGroup: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  formSubmitted:boolean = false;
  showForm:boolean;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private userService:UserService
  ) {
  }

  ngOnInit(): void {
      this.formGroup = new FormGroup(
        {
          email: new FormControl(null, [Validators.email, Validators.required]),
          password: new FormControl(null, Validators.required)
        }
      );
      this.email = this.formGroup.get('email');
      this.password = this.formGroup.get('password');

      if(this.router.url.indexOf('adminpanel') +10 == this.router.url.length){
        this.showForm = true;
      }else this.showForm = false;
    }

  submitCredentials() {
    this.formSubmitted = true;
    if(this.formGroup.valid){
      this.apiService
          .login(new Login(this.formGroup.value))
          .subscribe(
            (response) => {
              if(response['accessToken']==null){
                this.notificationService.showError("Wrong Credentials or Not Registered","Error");
                throw new HttpErrorResponse({status:401});
              }
              localStorage.setItem('access_token', response['accessToken']);
              localStorage.setItem('userId', response['userId']);
              if(this.userService.isUser()){
                this.notificationService.showError("Only have User Access","Error");
                localStorage.removeItem('access_token');
                localStorage.removeItem('userId');
                throw new HttpErrorResponse({status:403});
              }
            },
            (err: HttpErrorResponse) => {
              this.notificationService.showError(err.message, err.status);
            },
            () => {
              this.notificationService.showSuccess('Admin Logged In', 'Success');
              this.formSubmitted = false;
              this.formGroup.reset();
              this.router.navigateByUrl('');
            }
          );
    } 
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
