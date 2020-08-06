import { Component, OnInit, Input } from '@angular/core';
import { ProductSlider } from '../../data/slider-option';
import { Product } from '../../models/Product';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss']
})
export class ProductTabComponent implements OnInit {
  public ProductSliderConfig: any = ProductSlider;
  topProductData: Observable<Product[]>;
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.topProductData = this._productService.getProduct(5);
  }

}