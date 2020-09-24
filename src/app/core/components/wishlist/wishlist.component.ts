import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { WishlistItem } from 'src/app/shared/models/Wishlist';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItems: WishlistItem[];

  constructor(private toastrService: ToastrService,private router: Router,public _wishlistService: WishlistService,public _cartService: CartService) { }

  ngOnInit(): void {
    this._wishlistService.getWishlistItems().subscribe((data)=>{
      this.wishlistItems=data;
     
    });
  }

  async addToCart(product: WishlistItem) {
    const cart=[{
      stockId  : product.stockId ,
      productName : product.productName,
      imageUrl : product.imageUrl,
      quantity :  1,
      stockQuantity : 1000 ,
      discount : product.discount ,
      price : product.price ,
      activeStatus: true,
    }];
    // console.log(product);
    const d=this._cartService.addToCart(cart)
    console.log(d);
    // const status = await this._cartService.addToCart(cart);
    if(status) {
      // this.router.navigate(['/shop/cart']);
      // this.removeItem(product);
    }
  }

  removeItem(product: any) {
    this._wishlistService.removeWishlistItem(product).subscribe((data)=>{
      if(data.status)
      {
        const index = this.wishlistItems.indexOf(product);
        this.wishlistItems.splice(index, 1);
      }
      else{
        this.toastrService.error(
          "Sorry! Unable to remove the selected item from the list."
        );
      }
    });;
    
  }

}
