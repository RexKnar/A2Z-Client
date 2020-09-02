import { StockAttributes } from "./ProductAttributes";
import { Assets } from "./Asset";

export class Stock {
     id: number;
     price: number;
     quantity: number;
     description: string;
     stockAttributes: StockAttributes[];
     assets: Assets[];
}


