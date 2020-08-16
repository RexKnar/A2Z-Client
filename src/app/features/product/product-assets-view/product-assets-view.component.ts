import { Component, OnInit, Input } from '@angular/core';
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from 'src/app/shared/data/slider-option';
import { ProductDetails } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-assets-view',
  templateUrl: './product-assets-view.component.html',
  styleUrls: ['./product-assets-view.component.scss']
})
export class ProductAssetsViewComponent implements OnInit {
  @Input() productDetail: ProductDetails;
  @Input() onHowerChangeImage = false;
  @Input() thumbnail = false;
  @Input() loader = false;
  public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
  public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;
  constructor() { }

  ngOnInit(): void {
    if (this.loader) {
      setTimeout(() => {
        this.loader = false;
      }, 2000); // Skeleton Loader
    }
  }
}
