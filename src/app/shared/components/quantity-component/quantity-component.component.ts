import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-component',
  templateUrl: './quantity-component.component.html',
  styleUrls: ['./quantity-component.component.scss']
})
export class QuantityComponentComponent implements OnInit {

  public counter: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  
  increment() {
    this.counter++ ;
  }

  decrement() {
    if (this.counter > 1) this.counter-- ;
  }
}
