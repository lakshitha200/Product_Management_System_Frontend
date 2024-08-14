import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Service/admin.service';
import { Admin } from '../Model/Admin';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})
export class AdminsComponent implements OnInit {

  admins:Admin[] = [];
  ActiveAdmin!: Admin;
  imgUrl!: string;
  USERNAME: string | undefined;
  
  constructor(private adminService:AdminService, private router:Router,private authService:AuthService){}

  ngOnInit() {
   
    this.getAdminList()
    var username = this.authService.decodeJwt();
    this.USERNAME = username;
    console.log(username)
    this.getAdminByUsername(username);
    
  }

    //get all Admins
  getAdminList(){
    this.adminService.getAllAdmins().subscribe(data =>{
      this.admins = data;
      console.log(this.admins);
    })
  }


  //Get id
  getIdForDelete(inputEl:HTMLInputElement){
    // console.log(inputEl.value);
    const id = +inputEl.value;
    this.deleteAdmin(id);
  }

  //delete Admin
  deleteAdmin(id:number){
    // console.log(id)
    const userConfirmd = window.confirm("Do you want to delete?");

    if(userConfirmd){
      this.adminService.deleteAdmin(id).subscribe(data => {
        // console.log(data);
       
      })
      window.location.reload()
      alert("Successfully Deleted.")
    }else{
      console.log("Not deleted");
    }
  }





  getAdminByUsername(token:string | undefined){
    this.adminService.getAdminByUsername(token).subscribe(data=>{
      this.ActiveAdmin = data;
      var img = this.ActiveAdmin.img
      this.imgUrl = "../../assets/img/Profile/"+img;
      // console.log(imgUrl)
      console.log(this.ActiveAdmin)
    })
  
}

}
