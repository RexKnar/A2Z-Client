import { HomeModule } from './features/home/home.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannersComponent } from './shared/components/banners/banners.component';
import {SharedModule} from './shared/shared.module';



@NgModule({
   declarations: [
      AppComponent
    
     
    
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CoreModule,
      HomeModule,
      SharedModule,
     
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],

 })
export class AppModule { }
