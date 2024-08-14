import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Service/order.service';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth.service';
import { Order } from '../Model/Order';
import { ProductService } from '../Service/product.service';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  constructor(private orderService:OrderService,  private productService:ProductService,
    private router:Router,private authService:AuthService){}

  orders:Order[] = [];
  product!: Product;
  updateOrder: Order = new Order;
  

  ngOnInit(): void {
       
    this.getOrderList();

 
  }

  getOrderList(){
    this.orderService.getAllOrders().subscribe(data => {
      console.log(data);
      this.orders = data;

    })
  }

  delivered(id:number){
   
    this.orderService.getOrderById(id).subscribe(data=>{
      this.updateOrder = data;
      this.updateOrder.orderState = "Delivered";
      
      this.orderService.updateOrder(id,this.updateOrder).subscribe(data => {
        console.log(data);
        alert("Order State Updated!");
        window.location.reload();
      })
    })
   
    
    
  }

  cancel(){

  }

 
  
  


}
