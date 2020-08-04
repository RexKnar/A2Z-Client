import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {

  constructor(private readonly _productService: ProductService) { }
 
  topSellingProduct: Observable<Product[]>;

  ngOnInit(): void {

    this.topSellingProduct = this._productService.getProduct(1);
    console.log(this.topSellingProduct);
  }
}