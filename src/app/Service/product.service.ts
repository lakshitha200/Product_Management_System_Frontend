import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../Model/Product";


@Injectable({
    providedIn: "root"
})
export class ProductService{
    
    baseUrl:string = "http://localhost:8080/api/v1/products";
    constructor(private httpClient:HttpClient){}

    //get all products
    getAllProducts():Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.baseUrl,{headers:this.createAuthorizationHeaders()})
    }

    //save product
    saveProduct(product:Product):Observable<Object>{
        return this.httpClient.post(this.baseUrl,product,{headers:this.createAuthorizationHeaders()});
    }

    //get product by id
    getProductById(id:number):Observable<Product>{
        return this.httpClient.get<Product>(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
    }

    //update product

    updateProduct(id:number,product:Product):Observable<Object>{
        return this.httpClient.put(`${this.baseUrl}/${id}`,product,{headers:this.createAuthorizationHeaders()});
    }

    //delete employee
    deleteProduct(id:number):Observable<Object>{
        return this.httpClient.delete(`${this.baseUrl}/${id}`,{headers:this.createAuthorizationHeaders()});
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