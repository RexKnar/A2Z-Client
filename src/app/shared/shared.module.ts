import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ImagesliderComponent } from './components/imageslider/imageslider.component';
import { RouterModule } from '@angular/router';
import{ CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  imports: [
    CommonModule,
    
    CarouselModule
  ],
  declarations: [ImagesliderComponent],
  exports: [
    ImagesliderComponent
  ]
})
export class SharedModule { }
