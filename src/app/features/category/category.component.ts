import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public mobileSidebar: boolean = false;
  public minPrice: number = 0;
  public maxPrice: number = 1200;
  public products: any[] = [];
  public attributes: any[] = [];

  constructor() {}

  ngOnInit() {}

  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }

  updateFilter(tags: any) {
    //   tags.page = null; // Reset Pagination
    //   this.router.navigate([], {
    //     relativeTo: this.route,
    //     queryParams: tags,
    //     queryParamsHandling: 'merge', // preserve the existing query params in the route
    //     skipLocationChange: false  // do trigger navigation
    //   }).finally(() => {
    //     this.viewScroller.setOffset([120, 120]);
    //     this.viewScroller.scrollToAnchor('products'); // Anchore Link
    //   });
  }

  sortByFilter(value) {
    // this.router
    //   .navigate([], {
    //     relativeTo: this.route,
    //     queryParams: { sortBy: value ? value : null },
    //     queryParamsHandling: "merge", // preserve the existing query params in the route
    //     skipLocationChange: false, // do trigger navigation
    //   })
    //   .finally(() => {
    //     this.viewScroller.setOffset([120, 120]);
    //     this.viewScroller.scrollToAnchor("products"); // Anchore Link
    //   });
  }

  // product Pagination
  setPage(page: number) {
    // this.router
    //   .navigate([], {
    //     relativeTo: this.route,
    //     queryParams: { page: page },
    //     queryParamsHandling: "merge", // preserve the existing query params in the route
    //     skipLocationChange: false, // do trigger navigation
    //   })
    //   .finally(() => {
    //     this.viewScroller.setOffset([120, 120]);
    //     this.viewScroller.scrollToAnchor("products"); // Anchore Link
    //   });
  }

  // Change Grid Layout
  updateGridLayout(value: string) {
    // this.grid = value;
  }

  // Change Layout View
  updateLayoutView(value: string) {
    // this.layoutView = value;
    // if (value == 'list-view') this.grid = 'col-lg-12';
    // else this.grid = 'col-xl-3 col-md-6';
  }
}
