import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedComponent} from './shared.component';
import {BannersComponent} from './components/banners/banners.component';
import {RouterModule} from '@angular/router';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BannersComponent],
  exports:[
    BannersComponent
  ]
})
export class SharedModule { }
