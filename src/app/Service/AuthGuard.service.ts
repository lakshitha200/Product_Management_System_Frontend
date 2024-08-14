
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./Auth.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuardService implements CanActivate{

    constructor(private authService:AuthService,private router:Router){}

    canActivate():boolean{
       if(this.isAuthenticated()){
        return true;
       }else{
        this.router.navigateByUrl("/Login");
        return false;
       }
    
    }

    isAuthenticated():boolean{ 
        if(localStorage.getItem("JWT")){
            return true;
        }
        return false;
    }

}