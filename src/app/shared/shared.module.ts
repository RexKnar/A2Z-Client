import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannersComponent} from './components/banners/banners.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductTabComponent } from './components/product-tab/product-tab.component';
import { FormsModule} from '@angular/forms';
import {NgbModule} from  '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    
    
  ],
  declarations: [BannersComponent,FooterComponent, ProductTabComponent],
  exports: [
    FooterComponent,
    BannersComponent
    
  ]
})
export class SharedModule { }
