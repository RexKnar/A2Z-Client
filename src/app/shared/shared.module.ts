import { BannerComponent } from "./components/banner/banner.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImagesliderComponent } from "./components/imageslider/imageslider.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselModule } from "ngx-owl-carousel-o";
import { BarRatingModule } from "ngx-bar-rating";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { TranslateModule } from "@ngx-translate/core";
import { HeaderComponent } from "./components/header/header.component";
import { TopmenuComponent } from "./components/header/topmenu/topmenu.component";
import { MenubarComponent } from "./components/header/menubar/menubar.component";
import { LogoComponent } from "./components/header/topmenu/logo/logo.component";
import { SearchbarComponent } from "./components/header/topmenu/searchbar/searchbar.component";
import { ToolsbarComponent } from "./components/header/topmenu/toolsbar/toolsbar.component";
import { SidebarComponent } from "./components/header/menubar/sidebar/sidebar.component";
import { MenusComponent } from "./components/header/menubar/menus/menus.component";
import { ContactinfoComponent } from "./components/header/menubar/contactinfo/contactinfo.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProductTabComponent } from "./components/product-tab/product-tab.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductModalComponent } from "./components/product-card/product-modal/product-modal.component";
import { QuantityComponent } from "./components/quantity/quantity.component";
import { ProductSliderComponent } from "./components/product-slider/product-slider.component";
import { SkeletonProductCardComponent } from "./components/skeleton/skeleton-product-card/skeleton-product-card.component";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { ServiceInfoComponent } from "./components/service-info/service-info.component";
import { CoreModule } from '../core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { LocalStorageService } from './utility/LocalStorageService';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    CoreModule,
    ReactiveFormsModule,
    CarouselModule,
    BarRatingModule,
    NgxSkeletonLoaderModule,
    TranslateModule,
    LazyLoadImageModule,
  ],
  exports: [
    HeaderComponent,
    TopmenuComponent,
    MenubarComponent,
    LogoComponent,
    SearchbarComponent,
    ToolsbarComponent,
    SidebarComponent,
    MenusComponent,
    ContactinfoComponent,
    FooterComponent,
    ProductCardComponent,
    ProductModalComponent,
    QuantityComponent,
    BannerComponent,
    ProductSliderComponent,
    CarouselModule,
    ImagesliderComponent,
    ProductTabComponent,
    BannerComponent,
    ServiceInfoComponent
  ],
  declarations: [
    FooterComponent,
    ProductTabComponent,
    HeaderComponent,
    TopmenuComponent,
    MenubarComponent,
    LogoComponent,
    SearchbarComponent,
    ToolsbarComponent,
    SidebarComponent,
    MenusComponent,
    ContactinfoComponent,
    FooterComponent,
    ProductCardComponent,
    ProductModalComponent,
    QuantityComponent,
    BannerComponent,
    ProductSliderComponent,
    SkeletonProductCardComponent,
    ImagesliderComponent,
    ProductTabComponent,
    BannerComponent,
    ServiceInfoComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, LocalStorageService
  ],

})
export class SharedModule { }