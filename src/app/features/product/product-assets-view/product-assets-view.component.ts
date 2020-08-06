import { Component, OnInit, Input } from '@angular/core';
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from 'src/app/shared/data/slider-option';
import { ProductDetails } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-assets-view',
  templateUrl: './product-assets-view.component.html',
  styleUrls: ['./product-assets-view.component.scss']
})
export class ProductAssetsViewComponent implements OnInit {
  @Input() themeLogo: string = 'assets/images/a2z/logos/logo A2Z-01.png';
  @Input() productDetails : ProductDetails [];

  public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
  public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;
  constructor() { }

  ngOnInit(): void {
  }

}
