import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { ROUTE_CONFIG, WISHLIST_API_CONFIG} from "../models/Constants";
import { WishlistItem } from "../models/Wishlist";

@Injectable({
  providedIn: "root"
})
export class WishlistService {

  constructor(
    private toastrService: ToastrService,
    private readonly httpClient: HttpClient) { }
    public Currency = { name: "Rupee", currency: "INR", price: 1 };

    public getWishlistItems(): Observable<WishlistItem[]> {

      const apiUrl = ROUTE_CONFIG.baseUrl + WISHLIST_API_CONFIG.GetWishlistItemsURL;
      return this.httpClient.get<WishlistItem[]>(apiUrl);
    }

    public removeWishlistItem(item: WishlistItem) {
      const apiUrl = ROUTE_CONFIG.baseUrl + WISHLIST_API_CONFIG.RemoveWishlistItemsURL + item.wishListId;
      return this.httpClient.delete<any>(apiUrl);

    }
}
