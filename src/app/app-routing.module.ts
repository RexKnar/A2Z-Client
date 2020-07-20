import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ LoginComponent} from './login/login.component';
import { BrowserModule  } from '@angular/platform-browser';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:LoginComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
