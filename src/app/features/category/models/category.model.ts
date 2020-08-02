export interface CategoryModel {
  id: number;
  name: string;
  subcategory: SubCategoryModel[];
}

interface SubCategoryModel {
  id: number;
  name: string;
}
