import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AdminService } from '../Service/admin.service';
import { Admin } from '../Model/Admin';
import { AuthService } from '../Service/Auth.service';
import { ProductService } from '../Service/product.service';
import { Product } from '../Model/Product';
import { OrderService } from '../Service/order.service';
import { Order } from '../Model/Order';
import { CustomerService } from '../Service/customer.service';
import { Customer } from '../Model/Customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authService:AuthService,private adminService:AdminService, private customerService:CustomerService,
              private productService:ProductService, private orderService:OrderService){}

    ActiveAdmin!: Admin;
    imgUrl!: string;
    products:Product[]=[];
    inStock:any[]=[];
    orders:Order[] = [];
    orderState:any[]=[];
    customers:Customer[] = [];

  ngOnInit() {
     
    var username = this.authService.decodeJwt();
    console.log(username)
    this.getAdminByUsername(username);

    this.getProductDetails();
    this.getOrderDetails();
    this.getCustomerDetails();
  }

  getAdminByUsername(token:string | undefined){
    this.adminService.getAdminByUsername(token).subscribe(data=>{
      this.ActiveAdmin = data;
      var img = this.ActiveAdmin.img
      this.imgUrl = "../../assets/img/Profile/"+img;
      // console.log(imgUrl)
    })

  }

  getProductDetails(){
    this.productService.getAllProducts().subscribe(data=>{
      console.log(data);
      this.products = data;
      this.inStock =this.products.filter(s=>s.stock > 0);
      console.log(this.inStock)
    })
  }

  getOrderDetails(){
    this.orderService.getAllOrders().subscribe(data=>{
      this.orders = data;
      this.orders.filter(select =>{
        if(select.orderState == "pending"){
          this.orderState.push(select)
        }
      })
    })
  }

  getCustomerDetails(){
    this.customerService.getAllCustomers().subscribe(data=>{
      this.customers = data;
    })
  }
}
