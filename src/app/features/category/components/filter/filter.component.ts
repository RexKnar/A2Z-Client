import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() public products: ProductModel[] = [];
  @Input() public paginate: any = {};
  @Input() public layoutView: string = 'grid-view';
  @Input() public sortBy: string;

  @Output() setGrid: EventEmitter<any> = new EventEmitter<any>();
  @Output() setLayout: EventEmitter<any> = new EventEmitter<any>();
  @Output() sortedBy: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public setGridLayout(value: string): void {
    this.setGrid.emit(value); // Set Grid Size
  }

  public setLayoutView(value: string): void {
    this.layoutView = value;
    this.setLayout.emit(value); // Set layout view
  }

  public sorting(event): void {
    this.sortedBy.emit(event.target.value);
  }
}
