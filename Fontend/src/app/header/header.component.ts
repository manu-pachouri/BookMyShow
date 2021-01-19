import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './../Services/apiservice.service';
import { NotificationService } from './../Services/notification.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../Services/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  @Input() userName: string;

  constructor(
    private notificationService: NotificationService,
    private apiService: ApiService,
    private userService:UserService
  ) {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.userName = localStorage.getItem('userName');
  }

  refreshPage() {
    location.replace('');
  }

  checkLogin() {
    if (localStorage.getItem('access_token')) return true;
    return false;
  }

  logout() {
    this.apiService.logout().subscribe(
      (response) => {
        console.log(response);
      },
      (err: HttpErrorResponse) => {
        this.notificationService.showError(err.message, err.name);
      },
      () => {
        this.notificationService.showWarning(
          localStorage.getItem('userId') + ' Logged Out',
          'Log Out'
        );
        localStorage.removeItem('access_token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        this.userName = null;
        location.replace('');
      }
    );
  }

  isUser(){
    return this.userService.isUser();
  }

  isAdmin(){
    return this.userService.isAdmin();
  }

  
}
