import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from '../../../models/category.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent implements OnInit {
  @Input() categories: CategoryModel[];
  public products: any[] = [];
  public collapse: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
