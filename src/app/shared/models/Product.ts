import { Stock } from './Stock';
import { Review } from './review';
import { Assets } from './Asset';

export class Product {
    stockId: number;
    productName: string;
    imageUrl: string;
    price: number;
    discount: number;
    rating: number;
}

export class ProductDetails {
    token: string;
    userId: string;
    productId: string;
    productName: string;
    categoryId: number;
    categoryname: string;
    subcategoryId: number;
    subCategoryName: string;
    discount: string;
    wishlist_flag: boolean;
    new_flag: boolean;
    description: string;
    assets: Assets[];
    stock: Stock[];
    ratings: Review [];
}

