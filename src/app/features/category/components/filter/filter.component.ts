import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() public products: ProductModel[];
  @Input() public paginate: any;
  @Input() public layoutView: string;
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
    let selectedEvent;
    if (event.target.value == 1) {
      selectedEvent = { attributeName: 'alphabetic_order', value: 'asc' };
    } else if (event.target.value == 2) {
      selectedEvent = { attributeName: 'alphabetic_order', value: 'desc' };
    } else if (event.target.value == 3) {
      selectedEvent = { attributeName: 'price', value: 'asc' };
    } else if (event.target.value == 4) {
      selectedEvent = { attributeName: 'price', value: 'desc' };
    } else if (event.target.value == 5) {
      selectedEvent = { attributeName: 'by_popularity', value: 'desc' };
    }
    this.sortedBy.emit(selectedEvent);
  }
}
