import { Observable, async } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/shared/models/banner';
import { BannerService } from 'src/app/shared/services/banner.service';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  topProductsData: Observable<Product[]>;
  topBannerData: Observable<Banner[]>;
  bottomBannerData: Observable<Banner[]>;

  constructor(private _bannerService: BannerService, private _productService: ProductService) {}

  ngOnInit() {
    this.topBannerData = this._bannerService.getBanner('banner1');
    this.bottomBannerData = this._bannerService.getBanner('banner2');
    this.topProductsData = this._productService.getProduct(5);

  }



}
