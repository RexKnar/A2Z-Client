import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductTabComponent } from './components/product-tab/product-tab.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [FooterComponent, ProductTabComponent],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
