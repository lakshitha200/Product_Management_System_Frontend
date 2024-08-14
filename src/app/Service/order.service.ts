import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../Model/Order";

@Injectable({
    providedIn: "root"
})
export class OrderService{

    baseUrl:string = "http://localhost:8080/api/v1/orders";
    constructor(private httpClient:HttpClient){}

    //get all Orders
    getAllOrders():Observable<Order[]>{
        return this.httpClient.get<Order[]>(this.baseUrl,{headers:this.createAuthorizationHeaders()})
    }

    //get Order by id
    getOrderById(id:number):Observable<Order>{
        return this.httpClient.get<Order>(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
    }

    updateOrder(id:number,order:Order):Observable<Order>{
        return this.httpClient.put<Order>(`${this.baseUrl}/${id}`,order,{headers:this.createAuthorizationHeaders()});
    }

     //delete Order
     deleteOrder(id:number):Observable<string>{
        return this.httpClient.delete<string>(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
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