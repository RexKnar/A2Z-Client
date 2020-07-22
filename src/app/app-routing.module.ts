import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';
import { ShopComponent } from './core/component/shop/shop.component';
import { PagesComponent } from './core/component/pages/pages.component';
import { ElementsComponent } from './core/component/elements/elements.component';

// const routes: Routes = [

//   {path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
//   {path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)}
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/fashion',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./core/component/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'shop',
    component: ShopComponent,
    loadChildren: () => import('./core/component/shop/shop.module').then(m => m.ShopModule)
  },
  { 
    path: 'pages',
    component: PagesComponent,
    loadChildren: () => import('./core/component/pages/pages.module').then(m => m.PagesModule) 
  },
  { 
    path: 'elements', 
    component: ElementsComponent,
    loadChildren: () => import('./core/component/elements/elements.module').then(m => m.ElementsModule) },
  {
    path: '**', // Navigate to Home Page if not found any page
    redirectTo: 'home/fashion',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// @NgModule({
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
