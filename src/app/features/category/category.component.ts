import { Component, OnInit } from '@angular/core';
import { CategoryModel, SubCategoryModel } from './models/category.model';
import { AttributeModel } from './models/attribute.model';
import { ProductModel } from './models/product.model';
import { CategoryService } from './services/category.service';
import { FilterSearchModel } from './models/filter-search.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public grid: string = 'col-xl-3 col-md-6';
  public layoutView: string = 'grid-view';
  public mobileSidebar: boolean = false;
  public minPrice: number = 0;
  public maxPrice: number = 1200;
  public products: ProductModel[] = [];
  public attributes: AttributeModel[] = [];
  public categories: CategoryModel[] = [];
  public filteredSearch: FilterSearchModel;
  public filteredAttributes: any = [];
  public filteredCategory: string = '';
  public filteredPrice: string = '';
  public sortBy: string;
  public pageNo: number = 1;
  public paginate: any = {}; // Pagination use only
  public loader: boolean = true;
  public isShowSubCategory: boolean = false;
  public isShowCategory: boolean = true;
  public selectedSubCategory: SubCategoryModel[];
  filteredSubcategory: any;
  filteredSort: any;

  constructor(
    private readonly _categoryService: CategoryService,
    private readonly _activatedRoute: ActivatedRoute,
    private viewScroller: ViewportScroller,
    private _router: Router,
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.filteredCategory = queryParams['category'];
      this.filteredSubcategory = queryParams['subcategory'];
      if (this.filteredSubcategory != undefined) {
        this._categoryService.GetProductFilterAttributeBySubCategoryId(this.filteredSubcategory).subscribe((data) => {
          this.attributes = data;
        });
      }
      if (this.filteredCategory == undefined) {
        this.isShowCategory = true;
        this.isShowSubCategory = false;
      } else {
        this.isShowCategory = false;
        this.isShowSubCategory = true;
        this.getAllCategories();
      }
    });
    this._initializeValues();
    this.getAllCategories();
  }

  public getAllCategories(): void {
    this._categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
      this.isShowCategory = true;
      this.isShowSubCategory = false;
      if (this.filteredCategory != undefined) {
        this.isShowCategory = false;
        this.isShowSubCategory = true;
        this.selectedSubCategory = this._filterSubCategoryFromCategory(this.filteredCategory);
      }
    });
  }

  private _filterSubCategoryFromCategory(categoryName): SubCategoryModel[] {
    const selectedCategory = this.categories.find((x) => x.categoryName == categoryName);
    return selectedCategory.subcategory;
  }

  private _initializeValues(): void {}

  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }

  updateFilter(values) {
    const index = this.filteredAttributes.findIndex((x) => x.attributeName == values.attributeName);
    if (index !== -1) {
      this.filteredAttributes.splice(index, 1);
    }
    this.filteredAttributes.push(values);
    const clearRemovedFilterIndex = this.filteredAttributes.findIndex((x) => x.attributeValues.length == 0);
    if (clearRemovedFilterIndex !== -1) {
      this.filteredAttributes.splice(clearRemovedFilterIndex, 1);
    }
    this.applyFilter();
  }

  public onSelectSubCategory(element: SubCategoryModel): void {
    console.log(element);
  }

  public applyFilter(): void {
    this.filteredSearch = {
      type: 'subcategory',
      value: this.filteredSubcategory,
      filter: this.filteredAttributes,
      sorting: this.filteredSort,
      paging: {
        pageNo: 10,
        noofRecords: 20,
      },
      rangeFilter: {
        attributeName: 'price',
        minValue: this.minPrice,
        maxValue: this.maxPrice,
      },
    };
    console.log(this.filteredSearch);
  }

  public updatePriceFilterEvent(event): void {
    this.minPrice = event.minPrice;
    this.maxPrice = event.maxPrice;
    this.applyFilter();
  }

  // product Pagination
  setPage(page: number) {
    console.log(page);
  }

  // Change Grid Layout
  updateGridLayout(value: string) {
    this.grid = value;
  }
  sortByFilter(event): void {
    this.filteredSort = event;
  }

  // Change Layout View
  updateLayoutView(value: string) {
    this.layoutView = value;
    if (value == 'list-view') {
      this.grid = 'col-lg-12';
    } else {
      this.grid = 'col-xl-3 col-md-6';
    }
  }
}
