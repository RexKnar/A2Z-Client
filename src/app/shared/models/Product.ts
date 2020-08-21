import { Asset } from './Asset';
import { ProductAttributes } from './ProductAttributes';
import { Stock } from './Stock';
import { Review } from './Review';
export class Product {
  productId: string;
  productName: string;
  categoryId: number;
  categoryName: string;
  subCategoryId: number;
  subCategoryName: string;
  discount: string;
  quantity: string;
  wishlistFlag: boolean;
  newFlag: boolean;
  description: string;
  assets: Asset[];
  stocks: Stock[];
  Reviews: Review [];
}
