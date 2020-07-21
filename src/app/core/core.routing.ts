import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
];

export const CoreRoutes: ModuleWithProviders = RouterModule.forChild(routes);
