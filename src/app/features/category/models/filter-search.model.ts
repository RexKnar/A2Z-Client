export interface FilterSearchModel {
  type:
    | 'category'
    | 'subcategory'
    | 'product'
    | 'stock'
    | 'count'
    | 'search_string'
    | 'featured'
    | 'related_product'
    | 'recently_added_product'
    | 'offer_category'
    | 'offer_subcategory'
    | 'offer';
  value: number | string;
  filter: [
    {
      attributeName: string;
      value: string;
    },
  ];
  sorting: {
    attributeName: 'price' | 'alphabetic_order' | 'by_popularity';
    value: 'desc' | 'asc';
  };
  paging: {
    pageNo: number;
    noofRecords: number;
  };
  rangeFilter: {
    attributeName: string; // price
    minValue: number;
    maxValue: number;
  };
}

