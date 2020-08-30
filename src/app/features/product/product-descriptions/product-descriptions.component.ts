import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { ProductDetails } from "src/app/shared/models/Product";
import { ProductService } from "src/app/shared/services/product.service";
import { Stock } from "src/app/shared/models/Stock";
import { Wishlist } from "src/app/shared/models/Wishlist";
import { MessageConstants } from "src/app/shared/models/messageConstants";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-product-descriptions",
  templateUrl: "./product-descriptions.component.html",
  styleUrls: ["./product-descriptions.component.scss"]
})
export class ProductDescriptionsComponent implements OnInit {
  @Input() productDetail: ProductDetails;
  @Input() newPointer: number;
  currentStockPointer = 0;
  currentStock: Stock;
  public ImageSrc: string;

  constructor(
    private readonly _ProductService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.currentStockPointer = this.newPointer;
    this.currentStock = this.productDetail.stock[this.currentStockPointer];

  }
  addToWishlist(productDetail: ProductDetails) {
    const wishlist: Wishlist = new Wishlist();
    wishlist.userId = 4;
    wishlist.stockId = 2;
    wishlist.quantity = 1;
    this._ProductService.addToWishlist(wishlist).subscribe((data) => {
      this.toastr.success(MessageConstants.WISHLIST_SUCCESS, "", { timeOut: 2000 });
      productDetail.wishListFlag = !productDetail.wishListFlag;
    });
  }

}
