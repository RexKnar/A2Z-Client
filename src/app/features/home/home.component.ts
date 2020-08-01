import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { ProductCardService } from 'src/app/shared/services/product-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ProductCardList: Product [];
  constructor(private readonly _ProductCardService: ProductCardService) {}

  ngOnInit(): void {
    this.getProductCard();
  }
  public getProductCard(): void {
    this._ProductCardService.getProductCard().subscribe((data) => {
      this.ProductCardList = data;
    });
  }

}
