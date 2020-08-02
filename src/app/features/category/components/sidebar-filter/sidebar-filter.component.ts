import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CategoryModel } from '../../models/category.model';
import { AttributeModel } from '../../models/attribute.model';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss'],
})
export class SidebarFilterComponent implements OnInit {
  @Input() public mobileSidebar: boolean;
  @Input() public minPrice: number;
  @Input() public maxPrice: number;
  @Input() public products: ProductModel[];
  @Input() public attributes: AttributeModel[];
  @Input() public categories: CategoryModel[];

  @Output() public updateFilterEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public updatePriceFilterEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public toggleMobileSidebarEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateFilter(event): void {
    this.updateFilterEvent.emit(event);
  }

  toggleMobileSidebar(): void {
    this.toggleMobileSidebarEvent.emit(null);
  }

  updatePriceFilter(event): void {
    this.updatePriceFilterEvent.emit(event);
  }
}
