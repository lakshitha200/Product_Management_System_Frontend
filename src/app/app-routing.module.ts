import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { AdminsComponent } from './admins/admins.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuardService } from './Service/AuthGuard.service';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { AddAdminComponent } from './admins/add-admin/add-admin.component';
import { UpdateAdminComponent } from './admins/update-admin/update-admin.component';

const routes: Routes = [
  {path:'',redirectTo:"Dashboard",pathMatch:'full'},
  {path:'Login',component:SignInComponent},
  {path:'Dashboard',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'Admins',component:AdminsComponent,canActivate:[AuthGuardService]},
  {path:'Admins/Add-admin',component:AddAdminComponent,canActivate:[AuthGuardService]},
  {path:'Admins/Update-admin/:id',component:UpdateAdminComponent,canActivate:[AuthGuardService]},
  {path:'Product-list',component:ProductsComponent,canActivate:[AuthGuardService]},
  {path:'Product-list/Add-product',component:AddProductComponent},
  {path:'Product-list/Product-details/:id',component:ProductDetailsComponent,canActivate:[AuthGuardService]},
  {path:'Product-list/Product-details/:id/Update-product/:id',component:UpdateProductComponent,canActivate:[AuthGuardService]},
  {path:'Orders',component:OrdersComponent,canActivate:[AuthGuardService]},
  {path:'Orders/Order-details',component:OrderDetailsComponent,canActivate:[AuthGuardService]},
  {path:'Customers',component:CustomersComponent,canActivate:[AuthGuardService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
