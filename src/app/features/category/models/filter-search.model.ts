export interface FilterSearchModel {
  type: 'category' | 'subcategory' | 'product' | 'stock' | 'count';
  value: number;
  filter: AttributeFilterModel[];
  sorting: SortModel[];
  pagging: PaggingModel;
}

export interface AttributeFilterModel {
  attributeName: string;
  value: string;
}

export interface SortModel {
  attributeName: 'price' | 'Alphabets' | 'Popularity';
  value: 'desc' | 'asc';
}

export interface PaggingModel {
  pageno: number;
  noofrecords: number;
}
