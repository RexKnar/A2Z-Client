import { BannerComponent } from './components/banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesliderComponent } from './components/imageslider/imageslider.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { TopmenuComponent } from './components/header/topmenu/topmenu.component';
import { MenubarComponent } from './components/header/menubar/menubar.component';
import { LogoComponent } from './components/header/topmenu/logo/logo.component';
import { SearchbarComponent } from './components/header/topmenu/searchbar/searchbar.component';
import { ToolsbarComponent } from './components/header/topmenu/toolsbar/toolsbar.component';
import { SidebarComponent } from './components/header/menubar/sidebar/sidebar.component';
import { MenusComponent } from './components/header/menubar/menus/menus.component';
import { ContactinfoComponent } from './components/header/menubar/contactinfo/contactinfo.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductTabComponent } from './components/product-tab/product-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuantityComponent } from './components/quantity/quantity.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { SkeletonProductCardComponent } from './components/skeleton/skeleton-product-card/skeleton-product-card.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    BarRatingModule,
    NgxSkeletonLoaderModule,
    TranslateModule,
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
    QuantityComponent,
    BannerComponent,
    ProductSliderComponent,
    CarouselModule,
    ImagesliderComponent,
    BannerComponent,
   
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
    QuantityComponent,
    BannerComponent,
    ProductSliderComponent,
    SkeletonProductCardComponent,
    ImagesliderComponent,
    BannerComponent,
   
  ]
})
export class SharedModule { }
