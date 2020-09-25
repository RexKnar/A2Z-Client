import { Slider } from "./../../shared/models/slider";
import { Observable } from "rxjs";
import { Component, OnInit, Input } from "@angular/core";
import { Banner } from "src/app/shared/models/Banner";
import { BannerService } from "src/app/shared/services/banner.service";
import { Product } from "src/app/shared/models/Product";
import { ProductService } from "src/app/shared/services/product.service";
import { SliderService } from "src/app/shared/services/slider.service";
import { ProductTab } from "src/app/shared/models/ProductTab";
import { async } from "@angular/core/testing";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  topProductData: Observable<Product[]>;
  newProductData: Observable<Product[]>;
  bestSellerData: Observable<Product[]>;
  topBannerData: Observable<Banner[]>;
  bottomBannerData: Observable<Banner[]>;
  sliderData: Observable<Slider[]>;
  topProduct: any = [];
  newProduct: any = [];
  bestSeller: any = [];
  tabData: any = [];

  constructor(
    private _bannerService: BannerService,
    private _productService: ProductService,
    private _sliderService: SliderService
  ) {}

  ngOnInit() {
    this.topBannerData = this._bannerService.getBanner("banner1");
    this.bottomBannerData = this._bannerService.getBanner("banner2");
    this.sliderData = this._sliderService.getSlider("slider1");
    this.topProductData = this._productService.getProduct();
    this.newProductData = this._productService.getProduct();
    this.bestSellerData = this._productService.getProduct();
    this.topProduct.title = "Recent Products";
    this.topProduct.data = this.topProductData;
    this.newProduct.title = "New Products";
    this.newProduct.data = this.newProductData;
    this.bestSeller.title = "Top Selling Products";
    this.bestSeller.data = this.bestSellerData;
    this.tabData.push(this.topProduct);
    this.tabData.push(this.newProduct);
    this.tabData.push(this.bestSeller);

  }
}
