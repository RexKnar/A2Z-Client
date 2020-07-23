import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BarRatingModule } from "ngx-bar-rating";
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TranslateModule } from '@ngx-translate/core';
import { TopComponent } from './components/header/top/top.component';
import { LeftmenuComponent } from './components/header/menu/leftmenu/leftmenu.component';
import { MainmenuComponent } from './components/header/menu/mainmenu/mainmenu.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CarouselModule,
    BarRatingModule,
    NgxSkeletonLoaderModule,
    TranslateModule
  ],
 exports:[
  
   
  
   TopComponent,
   MenuComponent,
   MainmenuComponent,
   LeftmenuComponent
 ],
  declarations: [MenuComponent, TopComponent, LeftmenuComponent, MainmenuComponent, HeaderComponent]
})
export class SharedModule { }
