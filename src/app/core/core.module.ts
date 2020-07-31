import { CoreRoutes } from './core.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { LoginComponent } from './components/login/login.component';
  


@NgModule({
  imports: [
    CommonModule,
    CoreRoutes
  ],
  declarations: [
    CoreComponent,
    LoginComponent]
})
export class CoreModule { }
