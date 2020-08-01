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
    ceil: 1000,
  };

  price = {
    minPrice: this.min,
    maxPrice: this.max,
  };

  constructor() {}

  ngOnInit(): void {}

  // Range Changed
  appliedFilter(event: any) {
    this.price = { minPrice: event.value, maxPrice: event.highValue };
    this.priceFilter.emit(this.price);
  }
}
