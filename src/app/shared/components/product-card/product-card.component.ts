import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { Cart } from '../../models/Cart';
import { ToastrService } from 'ngx-toastr';
import { Wishlist } from '../../models/Wishlist';
import { MessageConstants } from '../../models/messageConstants';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() onHowerChangeImage = false;
  @Input() thumbnail = false;
  @Input() loader = false;
  @ViewChild('productView') ProductView: ProductModalComponent;
  ImageSrc: string;
  currentStockPointer:number  =0;
  constructor(private readonly _ProductService: ProductService, private toastr: ToastrService) { }

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
  addToCart(product: Product) {
    const cart: Cart = new Cart();
    cart.userId = 6;
    cart.stockId = 3;
    cart.quantity = 5;
    this._ProductService.addToCart(cart).subscribe((data) => {
      this.toastr.success(MessageConstants.CART_SUCCESS, '', { timeOut: 2000 });
    });
  }
  addToWishlist(product: Product) {
    const wishlist: Wishlist = new Wishlist();
    wishlist.userId = 4;
    wishlist.stockId = 2;
    wishlist.quantity = 1;
    this._ProductService.addToWishlist(wishlist).subscribe((data) => {
      this.toastr.success(MessageConstants.WISHLIST_SUCESS, '', { timeOut: 2000 });
      product.wishlistFlag = !product.wishlistFlag;
    });
  }
  addToCompare(product: Product) {
    this._ProductService.addToCompare(product);
  }
}
