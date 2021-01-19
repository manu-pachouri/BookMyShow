import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if(localStorage.getItem('access_token')!=null){
            const clonedReq= req.clone({
                headers:req.headers.set('Authorization','Bearer '+localStorage.getItem('access_token'))
            });
            return next.handle(clonedReq)
            .pipe(
                tap(
                    succ=>{
                    },
                    (err:HttpErrorResponse)=>{
                        if(err.status == 401){
                            localStorage.removeItem('access_token');
                            this.router.navigateByUrl('/login');
                        }
                    },
                    ()=>{}
            )
            );
        }
        return next.handle(req.clone());
    }
}