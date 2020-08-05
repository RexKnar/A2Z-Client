import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { ProductModalComponent } from "./product-modal/product-modal.component";
import { Product } from "../../models/Product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input() products: Product;
  ImageSrc: string = null;
  thumbnail: boolean = false;
  loader: boolean = false;
  onHowerChangeImage: boolean = false;
  product: any = {
    id: 1,
    sale: true,
    new: true,
    images: [
      {
        image_id: 111,
        id: 1,
        alt: "yellow",
        src: "./assets/images/product/fashion/39.jpg",
      },
    ],
  };

  @ViewChild("productView") ProductView: ProductModalComponent;

  constructor(private readonly _ProductService: ProductService) {}

  ngOnInit(): void {
    if (this.loader) {
      setTimeout(() => {
        this.loader = false;
      }, 2000); // Skeleton Loader
    }
  }

  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
  ChangeVariants(color, product) {
    product.variants.map((item) => {
      if (item.color === color) {
        product.images.map((img) => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
  addToCart(product: any) {
    console.log(product);
    this._ProductService.addToCart(product);
  }
}
