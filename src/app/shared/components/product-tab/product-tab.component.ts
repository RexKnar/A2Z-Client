import { Component, OnInit, Input } from "@angular/core";
import { ProductSlider } from "../../data/slider-option";
import { ProductTab } from "../../models/ProductTab";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-tab",
  templateUrl: "./product-tab.component.html",
  styleUrls: ["./product-tab.component.scss"],
})
export class ProductTabComponent implements OnInit {
  public ProductSliderConfig: any = ProductSlider;
  @Input() tabData: Observable<ProductTab[]>;

  constructor() {}

  ngOnInit(): void {}
}
