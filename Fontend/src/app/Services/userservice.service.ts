import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  roleMatch(allowedRoles):boolean{
    let isMatch = false;
    let token = localStorage.getItem('access_token');
    if(token == null) 
      return false;
    let payload = JSON.parse(window.atob(token.split('.')[1]));
    let userRole = payload.role;
    allowedRoles.forEach(element => {
      if(userRole == element){
        isMatch = true;
        return false;
      }
    });

    return isMatch;
  }  

  isUser(){
    let roles = ['User'];
    return this.roleMatch(roles);
  }

  isAdmin(){
    let roles = ['Admin'];
    return this.roleMatch(roles);
  }
}
