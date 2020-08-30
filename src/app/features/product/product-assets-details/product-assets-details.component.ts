import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { ProductDetails } from "src/app/shared/models/Product";
import { ProductService } from "src/app/shared/services/product.service";
import { ProductAttributes } from "src/app/shared/models/ProductAttributes";
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
  attributes: ProductAttributes[] = [];
  unique1: ProductAttributes[] = [];
  attributeGroups: any = {};
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
      stock.attributes.forEach((attribute) => {
        attribute.stockId = stock.id;
        this.attributes.push(attribute);
      });
    });
    this.attributes = this.attributes.filter((item, i, arr) => arr.findIndex((t) => t.attributeName === item.attributeName && t.attributeValue === item.attributeValue) === i);
    for (let i = 0; i < Object.keys(this.attributes).length; i++) {
      const groupName = this.attributes[i].attributeName;
      if (!this.attributeGroups[groupName]) {
        this.attributeGroups[groupName] = [];
      }
      this.attributeGroups[groupName].push(this.attributes[i]);
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
    const cart: Cart = new Cart();
    cart.userId = 6;
    cart.stockId = 3;
    cart.quantity = 5;
    this._ProductService.addToCart(cart).subscribe((data) => {
      this.toastr.success(MessageConstants.CART_SUCCESS, "", { timeOut: 2000 });
    });
  }
}
