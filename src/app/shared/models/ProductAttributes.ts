import { Attribute } from "@angular/core";

export class StockAttributes {
  attributeGroupId: number;
  attributeName: string;
  attributeGroupName: string;
  attributeValue: number;
  stockId?: number;
}
export class ProductAttributes {
  attributeGroupId: number;
  attributeName: string;
  attributeGroupName: string;
  attributes: Attributes[];
}

export class Attributes {
  attributeName: string;
  attributeValue: string;
}
