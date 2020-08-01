import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() products: Product;
  ImageSrc:string=null;
  thumbnail: boolean = false; 
  loader: boolean = false; 
  onHowerChangeImage: boolean = false;
  product: any={
    "id": 1,
    "sale": true,
    "stock": 5,
    "new": true,
    "images": [{
            "image_id": 111,
            "id": 1,
            "alt": "yellow",
            "src": "assets/images/product/fashion/39.jpg",
            "variant_id": [
                101,
                104
            ]
        },
        {
            "image_id": 112,
            "id": 1,
            "alt": "white",
            "src": "assets/images/product/fashion/6.jpg",
            "variant_id": [
                102,
                105
            ]
        },
        {
            "image_id": 113,
            "id": 1,
            "alt": "pink",
            "src": "assets/images/product/fashion/25.jpg",
            "variant_id": [
                103,
                106
            ]
        }
    ]
};
  
  @ViewChild("productView") ProductView: ProductModalComponent;

  constructor() { }

  ngOnInit(): void {
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
        })
      }
    })
  }
}

