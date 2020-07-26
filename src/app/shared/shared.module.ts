import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductTabComponent } from './components/product-tab/product-tab.component';
import {BannersComponent} from './components/banners/banners.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [FooterComponent, ProductTabComponent, BannersComponent],
  exports: [
    FooterComponent,
    BannersComponent
  ]
})
export class SharedModule { }
