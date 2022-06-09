import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}
    
  

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
        
    this.authService.autoLogin()

        if (this.authService.userLoginInfo){
            console.log(this.authService.userLoginInfo)
         return true
        }else
        console.log(this.authService.userLoginInfo)
        return this.router.createUrlTree(['/auth'])
        ;

    }
}