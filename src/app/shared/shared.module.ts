import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductTabComponent } from './components/product-tab/product-tab.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [FooterComponent, ProductTabComponent],
  exports: [
    FooterComponent,
  ]
})
export class SharedModule { }
