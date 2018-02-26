import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SalesComponent } from './sales/sales.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'categories/:id',
    component: SalesComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
