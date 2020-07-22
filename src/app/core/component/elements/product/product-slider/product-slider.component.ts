import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product';
import { ProductSlider } from 'src/app/shared/data/slider';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  public products: Product[] = [];

  public ProductSliderConfig: any = ProductSlider;
  
  constructor(public productService: ProductService) { 
    this.productService.getProducts.subscribe(response => this.products = response);
  }

  ngOnInit(): void {
  }

}
