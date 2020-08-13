import { Component, OnInit } from '@angular/core';
import { CategoryModel, SubCategoryModel } from './models/category.model';
import { AttributeModel } from './models/attribute.model';
import { ProductModel } from './models/product.model';
import { CategoryService } from './services/category.service';
import { AttributeFilterModel, FilterSearchModel } from './models/filter-search.model';
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
  public filteredAttributes: AttributeFilterModel[] = [];
  public filteredCategory: string = '';
  public filteredPrice: string = '';
  public sortBy: string;
  public pageNo: number = 1;
  public paginate: any = {}; // Pagination use only
  public loader: boolean = true;
  public isShowSubCategory: boolean = false;
  public isShowCategory: boolean = true;
  public selectedSubCategory: SubCategoryModel[];

  constructor(
    private readonly _categoryService: CategoryService,
    private readonly _activatedRoute: ActivatedRoute,
    private viewScroller: ViewportScroller,
    private _router: Router,
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.filteredCategory = queryParams['category'];
      if (this.filteredCategory == undefined) {
        this.isShowCategory = true;
        this.isShowSubCategory = false;
      } else {
        this.isShowCategory = false;
        this.isShowSubCategory = true;
        this.selectedSubCategory = this._filterSubCategoryFromCategory(this.filteredCategory);
      }
      this.paginate = this.getPager(this.products.length, +this.pageNo);
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

  private _initializeValues(): void {
    this.attributes = [
      {
        id: 1,
        name: 'Brands',
        values: [
          {
            id: 1,
            name: 'nike',
          },
        ],
      },
      {
        id: 2,
        name: 'Jewels',
        values: [
          {
            id: 1,
            name: 'asdff',
          },
          {
            id: 2,
            name: 'asdbkj',
          },
        ],
      },
    ];
  }

  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }

  updateFilter(values: AttributeFilterModel) {
    const index = this.filteredAttributes.findIndex((x) => x.attributeName == values.attributeName);
    if (index !== -1) {
      this.filteredAttributes.splice(index, 1);
    }
    // this.filteredAttributes.push(values);
    // const clearRemovedFilterIndex = this.filteredAttributes.findIndex((x) => x.attributeValues.length == 0);
    // if (clearRemovedFilterIndex !== -1) {
    //   this.filteredAttributes.splice(clearRemovedFilterIndex, 1);
    // }
    // this.applyFilter();
  }

  public onSelectSubCategory(element: SubCategoryModel): void {
    console.log(element);
  }

  public applyFilter(): void {
    // this.filteredSearch = {
    //   category: this.filteredCategory,
    //   attribute: this.filteredAttributes,
    //   price: {
    //     minPrice: this.minPrice,
    //     maxPrice: this.maxPrice,
    //   },
    // };
    // console.log(this.filteredSearch);
  }

  public updatePriceFilterEvent(event): void {
    this.minPrice = event.minPrice;
    this.maxPrice = event.maxPrice;
    this.applyFilter();
  }

  public sortProducts(products: ProductModel[], payload: string): any {
    if (payload === 'ascending') {
      return products.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'a-z') {
      return products.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'z-a') {
      return products.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'low') {
      return products.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'high') {
      return products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    }
  }

  sortByFilter(value) {
    console.log(this.sortProducts(this.products, value));
  }

  // product Pagination
  setPage(page: number) {
    this._router
      .navigate([], {
        relativeTo: this._activatedRoute,
        queryParams: { page: page },
        queryParamsHandling: 'merge', // preserve the existing query params in the route
        skipLocationChange: false, // do trigger navigation
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor('products'); // Anchore Link
      });
  }

  // Change Grid Layout
  updateGridLayout(value: string) {
    this.grid = value;
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

  public getPager(totalItems: number, currentPage: number = 1, pageSize: number = 16) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    // Paginate Range
    const paginateRange = 3;

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage < paginateRange - 1) {
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}
