import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { AdminsComponent } from './admins/admins.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './products/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { AddAdminComponent } from './admins/add-admin/add-admin.component';
import { UpdateAdminComponent } from './admins/update-admin/update-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductsComponent,
    OrdersComponent,
    CustomersComponent,
    AdminsComponent,
    AddProductComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    SignInComponent,
    OrderDetailsComponent,
    AddAdminComponent,
    UpdateAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
