import { Component, OnInit, Input } from '@angular/core';
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from 'src/app/shared/data/slider-option';

@Component({
  selector: 'app-product-assets-view',
  templateUrl: './product-assets-view.component.html',
  styleUrls: ['./product-assets-view.component.scss']
})
export class ProductAssetsViewComponent implements OnInit {
  @Input() themeLogo = 'assets/images/a2z/logos/logo A2Z-01.png';
  
  public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
  public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;
  constructor() { }

  ngOnInit(): void {
  }

}
