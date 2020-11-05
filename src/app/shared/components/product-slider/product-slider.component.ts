import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { Product, ProductDetails, ProductList } from "../../models/Product";
import { ProductSlider } from "../../data/slider-option";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-product-slider",
  templateUrl: "./product-slider.component.html",
  styleUrls: ["./product-slider.component.scss"]
})
export class ProductSliderComponent implements OnInit {
  public ProductSliderConfig: any = ProductSlider;
  @Input() products: ProductList = new ProductList();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
 
}
