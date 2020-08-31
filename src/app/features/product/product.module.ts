import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';


@NgModule({
  imports: [
    CommonModule,
    // NgModule
  ],
  exports: [
    ProductComponent,
    
  ],
  declarations: [ProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
