import { HomeRoutes } from './home.routing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerService } from 'src/app/shared/services/banner.service';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    SharedModule,
  ],
  providers: [BannerService],
  declarations: [HomeComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }


