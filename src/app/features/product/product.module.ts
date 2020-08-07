import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDescriptionsComponent } from './product-descriptions/product-descriptions.component';
import { ProductAssetsViewComponent } from './product-assets-view/product-assets-view.component';
import { ProductAssetsDetailsComponent } from './product-assets-details/product-assets-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductComponent } from './product.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DescriptionsComponent } from './description-tab/descriptions/descriptions.component';
import { ReviewsComponentComponent } from './description-tab/reviews-component/reviews-component.component';
import { SpecificationComponent } from './description-tab/specification/specification.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductService } from 'src/app/shared/services/product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    CarouselModule,
    LazyLoadImageModule,
    NgbModule,
    SharedModule
  ],
  exports: [
    CarouselModule,
    LazyLoadImageModule

  ],
  declarations: [
    ProductAssetsViewComponent,
    ProductComponent,
    ProductDescriptionsComponent,
    ProductAssetsDetailsComponent,
    DescriptionsComponent,
    ReviewsComponentComponent,
    SpecificationComponent
  ],
  providers: [ProductService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
