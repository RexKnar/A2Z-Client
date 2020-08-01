import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutes } from './category.routing';
import { Ng5SliderModule } from 'ng5-slider';
import { FilterComponent } from './components/filter/filter.component';
import { SidebarFilterComponent } from './components/sidebar-filter/sidebar-filter.component';
import { CategoryFilterComponent } from './components/sidebar-filter/category-filter/category-filter.component';
import { AttributeFilterComponent } from './components/sidebar-filter/attribute-filter/attribute-filter.component';
import { PriceFilterComponent } from './components/sidebar-filter/price-filter/price-filter.component';

@NgModule({
  imports: [CommonModule, CategoryRoutes, Ng5SliderModule],
  declarations: [
    CategoryComponent,
    FilterComponent,
    SidebarFilterComponent,
    CategoryFilterComponent,
    AttributeFilterComponent,
    PriceFilterComponent,
  ],
})
export class CategoryModule {}
