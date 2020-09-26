import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
  @Input() counter: number;
  @Output() checkoutQuantity = new EventEmitter<number>();

  // public counter: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
    this.checkoutQuantity.emit(this.counter);
  }

  decrement() {
    if (this.counter > 1) {
      this.counter--;
      this.checkoutQuantity.emit(this.counter);
    }
  }
}
