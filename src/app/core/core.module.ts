import { CoreRoutes } from "./core.routing";
import { NgModule } from "@angular/core";
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    CoreRoutes,
    ReactiveFormsModule,

  ],
  exports: [LoginComponent,
    LoginformComponent,
    RegisterformComponent,
    ResetpasswordformComponent,
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
    DiscountPipe
  ],
  providers: [
     {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
     }
      ],

})
export class CoreModule { }
