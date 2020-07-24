import { HomeModule } from './features/home/home.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DomElementSchemaRegistry } from '@angular/compiler';
@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CoreModule,
      SharedModule,
      HomeModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
