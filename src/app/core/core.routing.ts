import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProfileViewComponent } from "./components/profile/profile-view/profile-view.component";
import { AddressComponent } from "./components/profile/address/address.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [

  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "profileview",
    component: ProfileViewComponent
  },
  {
    path: "address",
    component: AddressComponent
  },
];

export const CoreRoutes: ModuleWithProviders = RouterModule.forChild(routes);
