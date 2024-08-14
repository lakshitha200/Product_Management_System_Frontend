import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../Model/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  id!: number;
  product:Product = new Product();

  constructor(private activateRoute:ActivatedRoute,private productService:ProductService,
              private router:Router) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
      console.log(this.product);
    })
  }
  // goToProductList(){
  //   this.router.navigateByUrl("/Product-list");
  // }
  // deleteProduct(id:number){
  //   console.log(id)
  //   const userConfirmd = window.confirm("Are you want to delete?");

  //   if(userConfirmd){
  //     this.productService.deleteProduct(id).subscribe(data => {
  //       console.log(data);
  //       this.goToProductList();
  //       alert("Successfully Deleted.")
  //     })
  //   }else{
  //     console.log("Not deleted");
  //   }
    
  // }

  


}
