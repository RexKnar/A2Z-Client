import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductSlider } from '../../data/slider-option';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {
  public ProductSliderConfig: any = ProductSlider;
  @Input() products: Product;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
}
