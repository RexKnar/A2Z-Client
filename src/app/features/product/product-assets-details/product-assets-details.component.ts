import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { ProductDetails } from "src/app/shared/models/Product";
import { ProductService } from "src/app/shared/services/product.service";
import { StockAttributes } from "src/app/shared/models/ProductAttributes";
import { Stock } from "src/app/shared/models/Stock";
import { MessageConstants } from "src/app/shared/models/messageConstants";
import { ToastrService } from "ngx-toastr";
import { Cart } from "src/app/shared/models/Cart";

@Component({
  selector: "app-product-assets-details",
  templateUrl: "./product-assets-details.component.html",
  styleUrls: ["./product-assets-details.component.scss"]
})
export class ProductAssetsDetailsComponent implements OnInit {
  @Input() productDetail: ProductDetails;
  @Output() newCurrentPointer = new EventEmitter<number>();
  counter = 1;
  public isactive: number;
  currentStockPointer = 0;
  currentStock: Stock;
  stockAttributes: StockAttributes[] = [];
  unique1: StockAttributes[] = [];
  attributeGroups: any = {};
  cart: Cart[] = [];
  addCart: any;
  constructor(private readonly _ProductService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.currentStock = this.productDetail.stock[this.currentStockPointer];
    this.getAttribute();
  }
  updateCheckoutQuantity(newCounter: number) {
    this.counter = newCounter;
  }
  getAttribute() {
    this.productDetail.stock.forEach((stock) => {
      stock.stockAttributes.forEach((attribute) => {
        attribute.stockId = stock.id;
        this.stockAttributes.push(attribute);
      });
    });
    this.stockAttributes = this.stockAttributes.filter((item, i, arr) => arr.findIndex((t) => t.attributeName === item.attributeName && t.attributeValue === item.attributeValue) === i);
    for (let i = 0; i < Object.keys(this.stockAttributes).length; i++) {
      const groupName = this.stockAttributes[i].attributeName;
      if (!this.attributeGroups[groupName]) {
        this.attributeGroups[groupName] = [];
      }
      this.attributeGroups[groupName].push(this.stockAttributes[i]);
    }
    const keys = Object.keys(this.attributeGroups);
    keys.forEach(item => {
      if (this.attributeGroups[item].length < 2) {
        delete this.attributeGroups[item];
      }
    });
  }
  setCurrentStockPointer(stockId: number) {
    let index = 0;
    this.productDetail.stock.forEach((stock) => {
      if (stock.id === stockId) {
        this.currentStockPointer = index;
        this.currentStock = this.productDetail.stock[index];
        this.newCurrentPointer.emit(this.currentStockPointer);
        return;
      }
      index = index + 1;
    });
  }
  addToCart(productDetail: ProductDetails) {
    this.addCart.stockId = 65;
    this.addCart.quantity = 5;

    this.cart.push(this.addCart);
    this._ProductService.addToCart(this.cart).subscribe((data) => {
      this.toastr.success(MessageConstants.CART_SUCCESS, "", { timeOut: 2000 });
    });
  }
}
