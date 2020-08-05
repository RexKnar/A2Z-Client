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
 
  productCardDetail: any;

  constructor(private readonly _productService: ProductService) { }
 
  ngOnInit(): void {
    this.getProductCardDetail()
  }
  public getProductCardDetail(): void{
    this._productService.getProduct(1).subscribe((data: any) => {
       this.productCardDetail = data;
    });
  }
}