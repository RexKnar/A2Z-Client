import { HomeModule } from './features/home/home.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { BannersComponent } from './shared/components/banners/banners.component';


@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CoreModule,
      HomeModule,
      SharedModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
