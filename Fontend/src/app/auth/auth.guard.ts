import { UserService } from './../Services/userservice.service';
import { NotificationService } from './../Services/notification.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,
              private notifService:NotificationService,
              private userService:UserService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('access_token')!=null){
        let roles = route.data['permittedRoles'] as Array<string>;
        if(roles){
          if(this.userService.roleMatch(roles)) 
            return true;
          else{
            this.notifService.showWarning("Only Admins are allowed!","Warning");
            return false;
          }
        }
        return true;
      }
      else{
        this.notifService.showWarning("Please login to continue","Warning");
        this.router.navigateByUrl('/login');
      }
    return false;
  }
}
