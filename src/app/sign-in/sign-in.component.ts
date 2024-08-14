import { Component } from '@angular/core';
import { AuthService } from '../Service/Auth.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private authService:AuthService,private router:Router){}

  login(username:string,password:string){
    console.log(username+"  "+password)
    var newUsername = "A_"+username;
    this.authService.login(newUsername,password).subscribe(response =>{
      console.log(response.accessToken);
      if(response.accessToken){
        const jwtToken = response.accessToken;
        localStorage.setItem("JWT",jwtToken)
        this.router.navigateByUrl("/Dashboard")
          .then(()=>{
            window.location.reload()
          })
 
      }
    },error =>{
      alert("Username or Password is incorrect");
    })
        
  }
}
