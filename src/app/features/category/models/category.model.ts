export interface CategoryModel {
  id: number;
  categoryName: string;
  subcategory: SubCategoryModel[];
}

export interface SubCategoryModel {
  id: number;
  subcategoryName: string;
}
