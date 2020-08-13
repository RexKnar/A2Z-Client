import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryModel, SubCategoryModel } from '../../../models/category.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent implements OnInit {
  @Input() categories: CategoryModel[];
  @Input() public isShowSubCategory: boolean = false;
  @Input() public isShowCategory: boolean = true;
  @Input() public selectedSubCategory: SubCategoryModel[];

  @Output() public selectSubCategoryEvent = new EventEmitter<SubCategoryModel>();
  public products: any[] = [];
  public collapse: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  onSelectSubCategory(element: SubCategoryModel): void {
    this.selectSubCategoryEvent.emit(element);
  }
}
