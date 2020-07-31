import { HomeRoutes } from './home.routing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';





@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SharedModule,
  ],
  declarations: [HomeComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }


