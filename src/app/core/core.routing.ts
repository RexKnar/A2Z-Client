import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CheckoutPageComponent } from "./components/checkout-page/checkout-page.component";
import { AddressBookComponent } from "./components/dashboard/address-book/address-book.component";
import { AddressFormComponent } from "./components/dashboard/address-book/address-form/address-form.component";
import { MyorderComponent } from './components/dashboard/myorder/myorder.component';

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
];

export const CoreRoutes: ModuleWithProviders = RouterModule.forChild(routes);
