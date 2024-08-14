
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Admin } from "../Model/Admin";
import { Observable } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { AdminService } from "./admin.service";

@Injectable({
    providedIn: "root"
})
export class AuthService{

    url = "http://localhost:8080/api/v1/";
    ActiveAdmin!: Admin;
    imgUrl!: string;

    constructor(private httpClient:HttpClient,private adminService:AdminService){}

    //save product
    login(username:string,password:string){
        return this.httpClient.post<any>(this.url+"login",{username,password})
    }
   
    //get active admin
    decodeJwt(){
        var token = localStorage.getItem("JWT");
        if(token == null){
            return undefined
        }else{
          var decodeToken = jwtDecode(token);
          // console.log(decodeToken.sub)
          return decodeToken.sub;
        }
    }

  

    
}