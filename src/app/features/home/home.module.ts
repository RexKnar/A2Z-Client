import { HomeRoutes } from './home.routing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerService } from '../../shared/services/banner.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/app/shared/services/product.service';
import { SliderService } from 'src/app/shared/services/slider.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SharedModule,
  ],
  providers: [BannerService, ProductService, SliderService],
  declarations: [HomeComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }


