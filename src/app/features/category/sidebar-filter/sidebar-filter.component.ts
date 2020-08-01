import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss'],
})
export class SidebarFilterComponent implements OnInit {
  public mobileSidebar: boolean = false;
  public minPrice: number = 0;
  public maxPrice: number = 1200;
  public products: any[] = [];
  public brands: any[] = [];

  constructor() {}

  ngOnInit(): void {}

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
}
