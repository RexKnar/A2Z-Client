import { CoreRoutes } from './core.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { LoginComponent } from './components/login/login.component';
import { LoginformComponent } from './components/login/loginform/loginform.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileViewComponent } from './components/profile/profile-view/profile-view.component';
import { AddressComponent } from './components/profile/address/address.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";



@NgModule({
  imports: [
    CommonModule,
    CoreRoutes,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    CoreComponent,
    LoginComponent,
    LoginformComponent,
    RegisterComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ProfileViewComponent,
    AddressComponent],
 
})
export class CoreModule { }
