
import { Customer } from "./Customer";
import { Product } from "./Product";

export class Order{

    oid!: number;
    orderNumber!: number;
    colour!:string;
    orderDate!: string;
    quantity!: number;
    orderState !: string;
    product!:Product;
    customer!: Customer;
}