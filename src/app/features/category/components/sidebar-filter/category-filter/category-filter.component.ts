import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel, SubCategoryModel } from '../../../models/category.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent implements OnInit, OnChanges {
  @Input() categories: CategoryModel[];
  @Input() public isShowSubCategory: boolean = false;
  @Input() public isShowCategory: boolean = true;
  @Input() public selectedSubCategory: SubCategoryModel[];

  @Output() public selectSubCategoryEvent = new EventEmitter<SubCategoryModel>();
  public products: any[] = [];
  public collapseCategory: boolean = true;
  public collapseSubCategory: boolean = true;
  public activeCategory: number = 0;
  public activeSubCategory: number = 0;
  constructor(private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.activeCategory = params.category ? params.category : 0;
      this.activeSubCategory = params.subcategory ? params.subcategory : 0;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.isShowCategory && this.collapseSubCategory) {
      this.collapseCategory = false;
    }
  }

  onSelectSubCategory(element: SubCategoryModel): void {
    this.selectSubCategoryEvent.emit(element);
  }
}
