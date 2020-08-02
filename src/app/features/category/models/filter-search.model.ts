export interface FilterSearchModel {
  category: string;
  attribute: AttributeFilterModel[];
  price: PriceFilterModel;
}

export interface AttributeFilterModel {
  attributeName: string;
  attributeValues: string[];
}

export interface PriceFilterModel {
  minPrice: number;
  maxPrice: number;
}
