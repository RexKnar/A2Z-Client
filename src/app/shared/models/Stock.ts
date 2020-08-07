import { Attributes } from './Attributes';
import { Assets } from './Asset';

export class Stock {
     id: number;
     price: number;
     quantity: number;
     attributes: Attributes[];
     assets: Assets[];
}


