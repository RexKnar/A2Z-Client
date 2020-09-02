import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/shared/services/product.service";
import { Observable } from "rxjs";
import { ProductDetails, Product } from "src/app/shared/models/Product";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  currentStockPointer = 0;
  productDetails: Observable<ProductDetails[]>;
  topProductData: Observable<Product[]>;
  productId = 0;
  constructor(private _productService: ProductService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.forEach((params) => {
      if (params["product"]) {
        this.productId = params["product"];
      }
    });
    this.productDetails = this._productService.getProductDetail(this.productId);
    this.topProductData = this._productService.getProduct();
  }
  updateCurrentPointer(newPointer: number) {
    this.currentStockPointer = newPointer;
  }
}
