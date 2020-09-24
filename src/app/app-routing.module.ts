import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule  } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";


const routes: Routes = [
  
  {path: "", loadChildren: () => import("./core/core.module").then(m => m.CoreModule)},
  {path: "home", loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)},
  {path: "product", loadChildren: () => import("./features/product/product.module").then(m => m.ProductModule)},
];

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
