import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Observable } from 'rxjs';
import { ProductDetails, Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  productDetails: Observable<ProductDetails[]>;
  topProductData: Observable<Product[]>;
  constructor(private _productService: ProductService) { }
  ngOnInit() {
    this.productDetails = this._productService.getProductDetail(1);
    this.topProductData = this._productService.getProduct(5);
   
  }
}
