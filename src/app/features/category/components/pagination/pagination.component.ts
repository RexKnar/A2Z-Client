import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() products: ProductModel[] = [];
  @Input() paginate: any = {};

  @Output() setPage: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  pageSet(page: number) {
    this.setPage.emit(page); // Set Page Number
  }
}
