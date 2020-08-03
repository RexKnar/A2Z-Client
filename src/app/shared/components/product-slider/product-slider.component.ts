import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductSlider } from '../../data/slider-option';
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {
  @Input() products= new Product();
  public ProductSliderConfig: any = ProductSlider;
 
  constructor() {}
  ngOnInit(): void {
  }

}
