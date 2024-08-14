import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../Service/Auth.service';
import { Admin } from '../Model/Admin';
import { AdminService } from '../Service/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  constructor(private authService:AuthService,private adminService:AdminService,private router:Router){}

    name!: string;
    imgUrl!: string;

  ngOnInit() {
    
    var username = this.authService.decodeJwt();
    console.log(username)
    this.getAdminByUsername(username);
    if(username == null){
      this.imgUrl = "../../assets/img/Profile/user.png";
      this.name = "Sign In"
    }else{
     
    }

  
  }

  getAdminByUsername(token:string | undefined){
    this.adminService.getAdminByUsername(token).subscribe(data=>{
      var img = data.img
      this.imgUrl = "../../assets/img/Profile/"+img;
      this.name = data.name;
      
      // if(this.ActiveAdmin.img != null){
      //   this.imgUrl = "../../assets/img/Profile/"+img;
      // }else{
      
      // }
    

      // console.log(imgUrl)
    })

  }


  logout(){
    
    const userConfirmd = window.confirm("Do you want to Sign-out?");

    if(userConfirmd){
        localStorage.removeItem("JWT");
        this.router.navigateByUrl("/Dashboard")
        window.location.reload();
        window.alert("Successfully Logout");
      
    }else{
      
    }
    
  }
    
}
