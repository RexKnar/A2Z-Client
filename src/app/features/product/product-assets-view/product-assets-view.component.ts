import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from "src/app/shared/data/slider-option";
import { ProductDetails } from "src/app/shared/models/Product";

@Component({
  selector: "app-product-assets-view",
  templateUrl: "./product-assets-view.component.html",
  styleUrls: ["./product-assets-view.component.scss"]
})
export class ProductAssetsViewComponent implements OnInit {
  @Input() productDetail = new ProductDetails();
  currentStockPointer = 1;
  @Input() onHowerChangeImage = false;
  @Input() thumbnail = false;
  @Input() loader = false;
  ImageSrc: string;
  @Input() newPointer: number;

  public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
  public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.currentStockPointer = this.newPointer;
  }
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
}
