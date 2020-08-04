import { Slider } from './../../shared/models/slider';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductCardService } from 'src/app/shared/services/product-card.service';
import { Banner } from 'src/app/shared/models/Banner';
import { BannerService } from 'src/app/shared/services/banner.service';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';
import { SliderService } from 'src/app/shared/services/slider.service';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ProductCardList: Product [];
  
 
  constructor(private _bannerService: BannerService,
    private _productService: ProductService,
    private _sliderService: SliderService,
    private readonly _ProductCardService: ProductCardService) { }

  topProductData: Observable<Product[]>;
  topBannerData: Observable<Banner[]>;
  bottomBannerData: Observable<Banner[]>;
  sliderData: Observable<Slider[]>;
  ngOnInit() {
    this.topBannerData = this._bannerService.getBanner('banner1');
    this.bottomBannerData = this._bannerService.getBanner('banner2');
    this.topProductData = this._productService.getProduct(5);
    this.sliderData = this._sliderService.getSlider('slider1');
    this.getProductCard();
  }
  public getProductCard(): void {
    this._ProductCardService.getProductCard().subscribe((data) => {
      this.ProductCardList = data;
      console.log(data)
    });
}
}
