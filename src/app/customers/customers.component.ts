import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Service/customer.service';
import { Customer } from '../Model/Customer';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{

  constructor(private customerService:CustomerService, private router:Router){}
  customers:Customer[] = [];

  ngOnInit(): void {
       
    this.getCustomerList();
  }

  getCustomerList(){
    this.customerService.getAllCustomers().subscribe(data => {
      //  console.log(data);
      this.customers = data;
    })
  }

  getIdForDelete(inputEl:HTMLInputElement){
    // console.log(inputEl.value)
    const id = +inputEl.value;
    this.deleteCustomer(id);
  }

   //delete Customer
   deleteCustomer(id:number){
    // console.log(id)
    const userConfirmd = window.confirm("Are you want to delete?");

    if(userConfirmd){
      this.customerService.deleteCustomer(id).subscribe(data => {
        // console.log(data);
        
      })
      alert("Successfully Deleted.")
      window.location.reload()
    }else{
      console.log("Not deleted");
    }
  }

}
