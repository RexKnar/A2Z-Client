import { Asset } from './Asset';
import { ProductAttributes } from './ProductAttributes';

export class Stock {
  id: number;
  price: number;
  quantity: number;
  assets: Asset[];
  rating: number;
  attributes: ProductAttributes[];
}
