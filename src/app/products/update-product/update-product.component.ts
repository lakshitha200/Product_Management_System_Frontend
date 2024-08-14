import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/Product';
import { ProductService } from '../../Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

  id!: number;
  product:Product = new Product();
  imagesArray:any[]=[];
  coloursArray:any[]=[];
  constructor(private productService:ProductService,private router:Router,private activateRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
      console.log(data)
      this.imagesArray = this.product.images;
      this.coloursArray = this.product.colors;
    })
  }
  goToProductDetails(){
    this.router.navigateByUrl("Product-list");
  }
  onSubmit(){
    console.log(this.product);
    this.productService.updateProduct(this.id,this.product).subscribe(data =>{
      console.log(data);
      this.goToProductDetails();
    })
  }

  // imageName(image:HTMLInputElement){
  //   let imagepath = image.value;
  //   let imageName = imagepath.substring(12)
  //   // console.log(imageName)
  //   this.products.img = imageName;
 
  // }

  addImage(img:HTMLInputElement){
    console.log(img.value)
    this.imagesArray.push({path:img.value})
    img.value = '';
    console.log(this.imagesArray)
  }
  removeI(i:any){
    // console.log(this.imagesArray.indexOf(i))
    var index = this.imagesArray.indexOf(i)
    var c = this.imagesArray.filter((select)=>{select.path==i})?this.imagesArray.splice(index,1):false;
    // console.log(this.imagesArray)

    
  }
  addColours(color:HTMLInputElement){
    console.log(color.value)
    this.coloursArray.push({name:color.value})
    color.value = '';
    console.log(this.coloursArray)
  }
  removeC(c:any){
    var index2 = this.coloursArray.indexOf(c)
    var c2 = this.coloursArray.filter((select)=>{select.name==c})?this.coloursArray.splice(index2,1):false;
    console.log(this.coloursArray)
  }

 
}
