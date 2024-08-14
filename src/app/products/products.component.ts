import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
import { ProductService } from '../Service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  
  products:Product[] = [];
  outStock!: number;
  inStock!:number;
  discountedItems!:number;
  
  
  constructor(private productService:ProductService, private router:Router){}

  ngOnInit(): void {
    this.getProductList();

    
  }

  getProductList(){
    this.productService.getAllProducts().subscribe(data =>{
      this.products = data;
      console.log(this.products)
  
      //instock,outstock and discounted items
      var outStock = [];
      var inStock = [];
      var discountedItems = [];

      for(let i=0;i<this.products.length;i++){
        if(this.products[i].stock <= 0){
          outStock.push(this.products[i])
        }
        if(this.products[i].stock > 0){
          inStock.push(this.products[i])
        }
        if(this.products[i].discountAvailable == true){
          discountedItems.push(this.products[i])
        }
      }
      this.outStock = outStock.length;
      this.inStock = inStock.length;
      this.discountedItems = discountedItems.length;

      console.log(this.outStock+"-"+this.inStock+"-"+this.discountedItems)
    })
  }

  getIdForDelete(inputEl:HTMLInputElement){
    console.log(inputEl.value);
    const id = +inputEl.value;

    this.deleteProduct(id);
  }

  deleteProduct(id:number){
    // console.log(id)
    const userConfirmd = window.confirm("Are you want to delete?");

    if(userConfirmd){
      this.productService.deleteProduct(id).subscribe(data => {
      
      
      })
      alert("Successfully Deleted.")
      window.location.reload();
    }else{
      console.log("Not deleted");
    }
  }

  goToProducList(){
   
    
  }
  
}
