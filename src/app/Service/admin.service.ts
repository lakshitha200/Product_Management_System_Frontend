import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Admin } from "../Model/Admin";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class AdminService{
    
    baseUrl:string = "http://localhost:8080/api/v1/admins";
    constructor(private httpClient:HttpClient){}

    //get all Admins
    getAllAdmins():Observable<Admin[]>{
        return this.httpClient.get<Admin[]>(this.baseUrl,{headers:this.createAuthorizationHeaders()})
    }

    //save Admin
    saveAdmin(admin:Admin):Observable<Admin>{
        return this.httpClient.post<Admin>(this.baseUrl,admin,{headers:this.createAuthorizationHeaders()});
    }

    //get Admin by id
    getAdminById(id:number):Observable<Admin>{
        return this.httpClient.get<Admin>(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
    }

    //update product

    updateAdmin(id:number,admin:Admin):Observable<Admin>{
        return this.httpClient.put<Admin>(`${this.baseUrl}/${id}`,admin,{headers:this.createAuthorizationHeaders()});
    }

    //delete Admin
    deleteAdmin(id:number):Observable<string>{
        return this.httpClient.delete<string>(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
    }

     //get Active Admin by username
     getAdminByUsername(username:string | undefined):Observable<Admin>{
        return this.httpClient.get<Admin>(`${this.baseUrl}${"/active/"}${username}`,{headers:this.createAuthorizationHeaders()});
    }


    //CreateAuthorizationHeaders
    private createAuthorizationHeaders(){
        const jwtToken = localStorage.getItem("JWT");
        if(jwtToken){
            return new HttpHeaders().set(
                'Authorization','Bearer '+jwtToken
            )
        }else{
            console.log("Jwt Token Not Found");
            return new HttpHeaders();
        }
       
       
    }

}