import { Component } from '@angular/core';
import { Admin } from '../../Model/Admin';
import { AdminService } from '../../Service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrl: './update-admin.component.css'
})
export class UpdateAdminComponent {

  id!: number;
  admin:Admin = new Admin();

  constructor(private adminService:AdminService,private router:Router,private activateRoute:ActivatedRoute) {}

  ngOnInit(): void {

    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.adminService.getAdminById(this.id).subscribe(data => {
    
      this.admin = data;
      this.admin.username = this.admin.username.substring(2)
    })
  }
  goToAdminList(){
    this.router.navigateByUrl("/Admins");
  }
  onSubmit(){
    console.log(this.admin);
    this.admin.username.substring(2);
    this.adminService.updateAdmin(this.id,this.admin).subscribe(data =>{
      console.log(data);
      this.goToAdminList();
    })
  }
}
