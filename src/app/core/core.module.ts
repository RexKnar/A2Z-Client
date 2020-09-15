import { CoreRoutes } from "./core.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreComponent } from "./core.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProfileViewComponent } from "./components/profile/profile-view/profile-view.component";
import { AddressComponent } from "./components/profile/address/address.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { LoginformComponent } from "./components/login/loginform/loginform.component";
import { RegisterformComponent } from "./components/login/registerform/registerform.component";
import { ResetpasswordformComponent } from "./components/login/resetpasswordform/resetpasswordform.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";



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
    ProfileComponent,
    ProfileViewComponent,
    AddressComponent],

})
export class CoreModule { }
