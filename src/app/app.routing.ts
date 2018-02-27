import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { NewItemComponent } from './new-item/new-item.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'categories/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'items/:id',
    component: ItemDetailComponent
  },
  {
    path: 'new-item',
    component: NewItemComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
