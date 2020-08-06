import { Stock } from './Stock';

export class Product {
    stockId: number;
    productName: string;
    imageUrl: string;
    price: number;
    discount: number;
    rating: number;
}

export class ProductDetails {
        productId: number;
        productName: string;
        categoryId: number;
        categoryname: string;
        subcategoryId: number;
        subCategoryName: string;
        discount: number;
        description: string;
        stock: Stock[];
}

