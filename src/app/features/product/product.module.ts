import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDescriptionsComponent } from './product-descriptions/product-descriptions.component';
import { ProductAssetsViewComponent } from './product-assets-view/product-assets-view.component';
import { ProductAssetsDetailsComponent } from './product-assets-details/product-assets-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductComponent } from './product.component';


@NgModule({
  
  imports: [
    CommonModule,
    ProductRoutingModule,
    CarouselModule,
  ],
  exports: [
    CarouselModule,

  ],
  declarations: [
    ProductAssetsViewComponent,
   ProductComponent,
   ProductDescriptionsComponent,
   ProductAssetsDetailsComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
