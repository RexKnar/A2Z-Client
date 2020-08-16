import { Attributes } from './Attributes';
import { Assets } from './Asset';

export class Stock {
     id: number;
     price: number;
     quantity: number;
     rating: number;
     description: string;
     attributes: Attributes[];
     assets: Assets[];
}


