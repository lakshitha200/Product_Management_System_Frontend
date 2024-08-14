import { PColors } from "./PColors";
import { ProductImages } from "./ProductImages";
import { ProductSpecifications } from "./ProductSpecifications";

export class Product{

    id!: number;
    number!: number;
    model!: string;
    brand!: string;
    name!: string;
    type!: string;
    price!: number;
    discountAvailable!: boolean;
    discount!: number;
    newPrice!: number;
    stock!: number;


    images!: ProductImages[];
    specifications!: ProductSpecifications;
    colors!: PColors[];



    // constructor(
    //     id: number,
    //     number:number,
    //     model: string,
    //     brand: string,
    //     name: string,
    //     type: string,
    //     price: number,
    //     discountAvailable: boolean,
    //     discount:number,
    //     newPrice: number,
    //     stock :number,
    //     images: ProductImages[],
    //     specifications:ProductSpecifications,
    //     colors: PColors[],
    // ){

    //     this.id = id;
    //     this.number=number
    //     this.model = model
    //     this.brand = brand
    //     this.name=name
    //     this.type=type
    //     this.price=price
    //     this.discountAvailable=discountAvailable
    //     this.discount=discount
    //     this.newPrice=newPrice
    //     this.stock=stock 
    
    //     this.images=images
    //     this.specifications=specifications
    //     this.colors=colors
    // }

    
}