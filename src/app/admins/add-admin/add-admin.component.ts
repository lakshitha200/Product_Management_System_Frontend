import { Component, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from '../../Service/admin.service';
import { Router } from '@angular/router';
import { Admin } from '../../Model/Admin';
import { Role } from '../../Model/Role';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.css'
})
export class AddAdminComponent {

  constructor(private adminService:AdminService,private router:Router) {}

  admin:Admin = new Admin();
  selectedValue = "Select Role";
  @ViewChild('adminNumber') adminNumber!: ElementRef<any>;

  onSubmit(){
    console.log(this.admin);
    this.saveAdmin();
  }

  saveAdmin(){
    this.adminService.saveAdmin(this.admin).subscribe(data =>{
      console.log(data);
      this.goToAdminList()
    })
  }

  goToAdminList(){
    this.router.navigateByUrl("/Admins");
  }

  saveSelectedOption(){
    return this.selectedValue;
  }

  // generate Number
  generateNumber(){
    this.adminService.getAllAdmins().subscribe(data => {
      let last = data[data.length-1]
      let number = last.number
      let newNumber = number + 1;
      this.admin.number = newNumber;
      // adminNumber.value = newNumber;
    })
  }

  imageName(image:HTMLInputElement){
    let imagepath = image.value;
    let imageName = imagepath.substring(12)
    // console.log(imageName)
    this.admin.img = imageName;

  }
  
}
