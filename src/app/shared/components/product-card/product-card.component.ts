import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ProductCardService } from '../../services/product-card.service';
import { ProductCard } from '../../models/ProductCard';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  ProductCardList: ProductCard [];
  
  @ViewChild("productView") ProductView: ProductModalComponent;

  constructor(private readonly _ProductCardService: ProductCardService) { }

  ngOnInit(): void {
    this.getProductCard();
  }
  public getProductCard(): void {
    this._ProductCardService.getProductCard().subscribe((data) => {
      this.ProductCardList = data;
      console.log(this.ProductCardList)
    });
  }
}
