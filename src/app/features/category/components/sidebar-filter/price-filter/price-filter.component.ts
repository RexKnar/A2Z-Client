import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss'],
})
export class PriceFilterComponent implements OnInit {
  // Using Output EventEmitter
  @Output() priceFilter: EventEmitter<any> = new EventEmitter<any>();

  // define min, max and range
  @Input() min: number;
  @Input() max: number;

  public collapse: boolean = true;

  options: any = {
    floor: 0,
    ceil: 20000,
  };
  price: { minPrice: number; maxPrice: number };

  constructor() {}

  ngOnInit(): void {
    this.price = {
      minPrice: this.min,
      maxPrice: this.max,
    };
  }

  // Range Changed
  appliedFilter(event: any) {
    this.price = { minPrice: event.value, maxPrice: event.highValue };
    this.priceFilter.emit(this.price);
  }
}
