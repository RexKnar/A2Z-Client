import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {

  public counter: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++ ;
  }

  decrement() {
    if (this.counter > 1) { this.counter-- ; }
  }
}
