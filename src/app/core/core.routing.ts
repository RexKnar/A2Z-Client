import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileViewComponent } from './components/profile/profile-view/profile-view.component';
import { AddressComponent } from './components/profile/address/address.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'forgotpassword', 
    component: ForgotPasswordComponent 
  },
  { 
    path: 'profile', 
    component: ProfileComponent 
  },
  { 
    path: 'resetpassword', 
    component: ResetPasswordComponent 
  },
  { 
    path: 'profileview', 
    component: ProfileViewComponent 
  },
  { 
    path: 'address', 
    component: AddressComponent 
  },
  { 
    path: 'cart', 
    component: CartComponent 
  },
];

export const CoreRoutes: ModuleWithProviders = RouterModule.forChild(routes);
