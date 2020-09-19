import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CheckoutPageComponent } from "./components/checkout-page/checkout-page.component";
import { AddressBookComponent } from "./components/dashboard/address-book/address-book.component";

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

];

export const CoreRoutes: ModuleWithProviders = RouterModule.forChild(routes);
