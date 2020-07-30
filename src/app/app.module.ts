import { HomeModule } from './features/home/home.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CoreModule,
      HomeModule,
      SharedModule,
      CommonModule,
     HttpClientModule
 
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
