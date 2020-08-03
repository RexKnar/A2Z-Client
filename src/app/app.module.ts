import { HomeModule } from './features/home/home.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
   declarations: [
      AppComponent
    ],
   imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      CoreModule,
      HomeModule,
      SharedModule,
      HttpClientModule,
      BrowserAnimationsModule

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
