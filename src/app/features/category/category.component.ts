import { Component, OnInit } from '@angular/core';
import { CategoryModel, SubCategoryModel } from './models/category.model';
import { AttributeModel } from './models/attribute.model';
import { CategoryService } from './services/category.service';
import { FilterSearchModel } from './models/filter-search.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/Product';
import { ProductFilterService } from './services/product-filter-service.service';

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
  public maxPrice: number = 20000;
  public products: Product[] = [];
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
  public isShowCategory: boolean = true;
  public selectedSubCategory: SubCategoryModel[] = [];
  public filteredSubcategory: any;
  public filteredSort: any;
  public filteredProduct: any;
  public filteredStock: any;
  public filteredCount: any;
  public filteredSearchString: any;
  public filteredFeatured: any;
  public filteredRelatedProduct: any;
  public filteredRecentlyAddedProduct: any;
  public filteredOfferCategory: any;
  public filteredOfferSubcategory: any;
  public filteredOffer: any;
  public filterType: any = '';
  public filterValue: string | number = 0;

  constructor(
    private readonly _categoryService: CategoryService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _productService: ProductService,
    private readonly _productFilterService: ProductFilterService,
  ) {
    this.filteredSort = { attributeName: 'alphabetic_order', value: 'asc' };
    this.filteredSearch = {
      type: this.filterType,
      value: this.filterValue,
      filter: this.filteredAttributes,
      sorting: this.filteredSort,
      paging: {
        pageNo: this.pageNo,
        noofRecords: 10,
      },
      rangeFilter: {
        attributeName: 'price',
        minValue: this.minPrice,
        maxValue: this.maxPrice,
      },
    };
  }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      this.filteredCategory = queryParams['category'];
      this.filteredSubcategory = queryParams['subcategory'];
      this.filteredProduct = queryParams['product'];
      this.filteredStock = queryParams['stock'];
      this.filteredCount = queryParams['count'];
      this.filteredSearchString = queryParams['search_string'];
      this.filteredFeatured = queryParams['featured'];
      this.filteredRelatedProduct = queryParams['related_product'];
      this.filteredRecentlyAddedProduct = queryParams['recently_added_product'];
      this.filteredOfferCategory = queryParams['offer_category'];
      this.filteredOfferSubcategory = queryParams['offer_subcategory'];
      this.filteredOffer = queryParams['offer'];

      if (
        this.filteredCategory == undefined &&
        this.filteredSubcategory == undefined &&
        this.filteredProduct == undefined &&
        this.filteredStock == undefined &&
        this.filteredCount == undefined &&
        this.filteredSearchString == undefined &&
        this.filteredFeatured == undefined &&
        this.filteredRelatedProduct == undefined &&
        this.filteredRecentlyAddedProduct == undefined &&
        this.filteredOfferCategory == undefined &&
        this.filteredOfferSubcategory == undefined &&
        this.filteredOffer == undefined
      ) {
        this.isShowCategory = true;
        this.filterType = '';
        this.filterValue = '';
        this.applyFilter();
        this.getAllCategories();
      }

      if (this.filteredCategory != undefined) {
        this.filterType = 'category';
        this.filterValue = this.filteredCategory;
        this.isShowCategory = false;
        this.getAllCategories();
        this.applyFilter();
      }

      if (this.filteredSubcategory != undefined) {
        this.filterType = 'subcategory';
        this.filterValue = this.filteredSubcategory;
        this.getProductFilterAttributeBySubCategoryId(this.filteredSubcategory);
        this.applyFilter();
      }

      if (this.filteredProduct != undefined) {
        this.filterType = 'product';
        this.filterValue = this.filteredProduct;
        this.applyFilter();
      }

      if (this.filteredStock != undefined) {
        this.filterType = 'stock';
        this.filterValue = this.filteredStock;
        this.applyFilter();
      }

      if (this.filteredCount != undefined) {
        this.filterType = 'count';
        this.filterValue = this.filteredCount;
        this.applyFilter();
      }

      if (this.filteredSearchString != undefined) {
        this.filterType = 'search_string';
        this.filterValue = this.filteredSearchString;
        this.applyFilter();
      }

      if (this.filteredFeatured != undefined) {
        this.filterType = 'featured';
        this.filterValue = this.filteredFeatured;
        this.applyFilter();
      }

      if (this.filteredRelatedProduct != undefined) {
        this.filterType = 'related_product';
        this.filterValue = this.filteredRelatedProduct;
        this.applyFilter();
      }

      if (this.filteredRecentlyAddedProduct != undefined) {
        this.filterType = 'recently_added_product';
        this.filterValue = this.filteredRecentlyAddedProduct;
        this.applyFilter();
      }

      if (this.filteredOfferCategory != undefined) {
        this.filterType = 'offer_category';
        this.filterValue = this.filteredOfferCategory;
        this.applyFilter();
      }

      if (this.filteredOfferSubcategory != undefined) {
        this.filterType = 'offer_subcategory';
        this.filterValue = this.filteredOfferSubcategory;
        this.applyFilter();
      }

      if (this.filteredOffer != undefined) {
        this.filterType = 'offer';
        this.filterValue = this.filteredOffer;
        this.applyFilter();
      }
    });
  }

  public getProductFilterAttributeBySubCategoryId(id: any): void {
    this._categoryService.GetProductFilterAttributeBySubCategoryId(id).subscribe((data) => {
      this.attributes = data;
    });
  }

  public getAllCategories(): void {
    this._categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
      this.isShowCategory = true;
      if (this.filteredCategory != undefined) {
        this.isShowCategory = false;
        this.selectedSubCategory = this._filterSubCategoryFromCategory(this.filteredCategory);
      }
    });
  }

  private _filterSubCategoryFromCategory(categoryId): SubCategoryModel[] {
    const selectedCategory = this.categories.find((x) => x.id == categoryId);
    return selectedCategory.subcategory;
  }

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
      type: this.filterType,
      value: this.filterValue,
      filter: this.filteredAttributes,
      sorting: this.filteredSort,
      paging: {
        pageNo: this.pageNo,
        noofRecords: 10,
      },
      rangeFilter: {
        attributeName: 'price',
        minValue: this.minPrice,
        maxValue: this.maxPrice,
      },
    };
    console.log(this.filteredSearch);
    this._productFilterService.FilterSearchProduct(this.filteredSearch).subscribe((data: any) => {
      this.products = data.products;
      this.paginate = this.getPager(data.totalCount, +this.pageNo);
      // this.minPrice = data.price.minPrice;
      // this.maxPrice = data.price.maxPrice;
    });
  }

  public updatePriceFilterEvent(event): void {
    this.minPrice = event.minPrice;
    this.maxPrice = event.maxPrice;
    this.applyFilter();
  }

  setPage(page: number) {
    this.pageNo = page ? page : this.pageNo;
    this.applyFilter();
  }

  // Change Grid Layout
  updateGridLayout(value: string) {
    this.grid = value;
  }
  sortByFilter(event): void {
    this.filteredSort = event;
    this.applyFilter();
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

  public getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
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
