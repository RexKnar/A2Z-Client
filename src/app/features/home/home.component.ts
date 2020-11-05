import { Slider } from "./../../shared/models/slider";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Banner } from "src/app/shared/models/Banner";
import { BannerService } from "src/app/shared/services/banner.service";
import { GetProductList, ProductList } from "src/app/shared/models/Product";
import { ProductService } from "src/app/shared/services/product.service";
import { SliderService } from "src/app/shared/services/slider.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  getProductListRequest: GetProductList;
  topProductData: Observable<ProductList>;
  newProductData: Observable<ProductList>;
  bestSellerData: Observable<ProductList>;
  topBannerData: Observable<Banner[]>;
  bottomBannerData: Observable<Banner[]>;
  sliderData: Observable<Slider[]>;
  topProduct: any = [];
  newProduct: any = [];
  bestSeller: any = [];
  tabData: any = [];
  productList: Observable<ProductList>;
  constructor(
    private _bannerService: BannerService,
    private _productService: ProductService,
    private _sliderService: SliderService
  ) { }

  ngOnInit() {
    this.getProductListRequest = {
      type: "category",
      value: "2043"
    };
    this.topBannerData = this._bannerService.getBanner("banner1");
    this.bottomBannerData = this._bannerService.getBanner("banner2");
    this.sliderData = this._sliderService.getSlider("slider1");
    this.productList = this._productService.getProduct(this.getProductListRequest);
    this.topProductData = this._productService.getProduct(this.getProductListRequest);
    this.newProductData = this._productService.getProduct(this.getProductListRequest);
    this.bestSellerData = this._productService.getProduct(this.getProductListRequest);
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
