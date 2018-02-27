import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { routing } from './app.routing';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { NewItemComponent } from './new-item/new-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoryDetailComponent,
    ItemDetailComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
