import { Asset } from './Asset';
import { ProductAttributes } from './ProductAttributes';
export class Product {
    stockId: number;
    productName: string;
    price: number;
    discount: number;
    imageUrl: string;
    rating: number;
}
// asset: Asset[];

export class ProductDetails {
    productId:string;
    productName:string;
    categoryId:number;
    categoryname:string;
    subcategoryId:number;
    subCategoryName:string;
    price:string;
    quantity:string;
    description:string;
    imgUrl: string;
    productAttributes: ProductAttributes[];
}
