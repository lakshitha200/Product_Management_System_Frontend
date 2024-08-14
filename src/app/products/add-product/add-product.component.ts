import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../Model/Product';
import { ProductService } from '../../Service/product.service';
import { Router } from '@angular/router';
import { ProductImages } from '../../Model/ProductImages';
import { ProductSpecifications } from '../../Model/ProductSpecifications';
import { PColors } from '../../Model/PColors';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{


  constructor(private productService:ProductService,private router:Router) {}
 
  product: Product = new Product();
  pSpecifications:ProductSpecifications = new ProductSpecifications();
  productImages:ProductImages = new ProductImages();
  productColours:PColors = new PColors();
  imgUrl!: string;
  imageObject!: ProductImages;
  selectType!: string;
  imagesArray:any[]=[];
  coloursArray:any[]=[];
  discountOpen:any;

  ngOnInit(): void {
    // console.log(this.product.discountAvailable)
  }


  onSubmit(){

    // console.log(this.pSpecifications);
    this.product.specifications = this.pSpecifications;
    this.product.images = this.imagesArray;
    this.product.colors = this.coloursArray;
    // console.log(this.product);
    this.saveProduct();
  }

  saveProduct(){
    this.productService.saveProduct(this.product).subscribe(data =>{
      console.log(data);
      this.goToProductList();
    })
  }
  goToProductList(){
    this.router.navigateByUrl("Product-list");
  }

  


  getNumber(){
    this.productService.getAllProducts().subscribe(data=>{
      // console.log(data[data.length-1].number);
      this.product.number = data[data.length-1].number+1;
    })
  }

  getValue(value:any){
    // console.log(value.checked)
    this.discountOpen = value.checked;
  }


  onSelectChange(event:any){
    this.selectType = event.value;
      // console.log(event.value)
  }
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
    // console.log(color.value)
    this.coloursArray.push({name:color.value})
    color.value = '';
    // console.log(this.coloursArray)
  }
  removeC(c:any){
    var index2 = this.coloursArray.indexOf(c)
    var c2 = this.coloursArray.filter((select)=>{select.name==c})?this.coloursArray.splice(index2,1):false;
    // console.log(this.coloursArray)
  }
}
