import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CheckoutPageComponent } from "./components/checkout-page/checkout-page.component";
import { AddressBookComponent } from "./components/dashboard/address-book/address-book.component";
import { AddressFormComponent } from "./components/dashboard/address-book/address-form/address-form.component";
import { MyorderComponent } from "./components/dashboard/myorder/myorder.component";
import { CartComponent } from "./components/cart/cart.component";
import { WishlistComponent } from "./components/wishlist/wishlist.component";
import { CheckoutOrderComponent } from './components/checkout-page/components/checkout-order/checkout-order.component';
import { CheckoutAddressComponent } from './components/checkout-page/components/checkout-address/checkout-address.component';

const routes: Routes = [

  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "address_book",
    component: AddressBookComponent
  },
  {
    path: "checkout",
    component: CheckoutPageComponent
  },
  {
    path: "checkout-order",
    component: CheckoutOrderComponent
  },
  {
    path: "checkout-address",
    component: CheckoutAddressComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "address_form",
    component: AddressFormComponent
  },
  {
    path: "my_order",
    component: MyorderComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "wishlist",
    component: WishlistComponent
  },

];

export const CoreRoutes: ModuleWithProviders = RouterModule.forChild(routes);
