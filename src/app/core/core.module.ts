import { CoreRoutes } from "./core.routing";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreComponent } from "./core.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { LoginformComponent } from "./components/login/loginform/loginform.component";
import { RegisterformComponent } from "./components/login/registerform/registerform.component";
import { ResetpasswordformComponent } from "./components/login/resetpasswordform/resetpasswordform.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { CheckoutPageComponent } from "./components/checkout-page/checkout-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AddressBookComponent } from "./components/dashboard/address-book/address-book.component";
import { MyorderComponent } from "./components/dashboard/myorder/myorder.component";
import { AddressFormComponent } from "./components/dashboard/address-book/address-form/address-form.component";
import { CartComponent } from "./components/cart/cart.component";
import { DiscountPipe } from "../shared/pipes/discount.pipe";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../shared/interceptors/AuthInterceptor";
import { WishlistComponent } from "./components/wishlist/wishlist.component";
import { ChangepasswordComponent } from "./components/dashboard/changepassword/changepassword.component";
import { CheckoutOrderComponent } from './components/checkout-page/components/checkout-order/checkout-order.component';
import { CheckoutAddressComponent } from './components/checkout-page/components/checkout-address/checkout-address.component';
import { AccordationHeaderComponent } from './components/checkout-page/components/accordation-header/accordation-header.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    CoreRoutes,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [LoginComponent,
    LoginformComponent,
    RegisterformComponent,
    ResetpasswordformComponent,
    AccordationHeaderComponent

  ],
  
  declarations: [
    CoreComponent,
    LoginComponent,
    LoginformComponent,
    RegisterformComponent,
    ResetpasswordformComponent,
    CheckoutPageComponent,
    DashboardComponent,
    AddressBookComponent,
    MyorderComponent,
    AddressFormComponent,
    CartComponent,
    DiscountPipe,
    WishlistComponent,
    ChangepasswordComponent,
    CheckoutOrderComponent,
    CheckoutAddressComponent,
    AccordationHeaderComponent
  ],
  

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CoreModule { }
