import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';

const routes: Routes = [

  {path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
  {path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  {path: '', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
