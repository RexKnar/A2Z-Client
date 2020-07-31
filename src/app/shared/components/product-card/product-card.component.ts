import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModalComponent } from './product-modal/product-modal.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @ViewChild("productView") ProductView: ProductModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
