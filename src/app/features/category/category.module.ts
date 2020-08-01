import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutes } from './category.routing';
import { FilterComponent } from './filter/filter.component';
import { SidebarFilterComponent } from './sidebar-filter/sidebar-filter.component';
import { CategoryFilterComponent } from './sidebar-filter/category-filter/category-filter.component';
import { AttributeFilterComponent } from './sidebar-filter/attribute-filter/attribute-filter.component';
import { PriceFilterComponent } from './sidebar-filter/price-filter/price-filter.component';
import { Ng5SliderModule } from 'ng5-slider';

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
