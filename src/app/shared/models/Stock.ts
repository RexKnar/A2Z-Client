import { ProductAttributes} from "./ProductAttributes";
import { Assets } from "./Asset";
import {  Ratings } from "./Ratings";

export class Stock {
     id: number;
     price: number;
     quantity: number;
     rating: number;
     description: string;
     attributes: ProductAttributes[];
     assets: Assets[];
     ratings: Ratings[];
}


