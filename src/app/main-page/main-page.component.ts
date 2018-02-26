import { Component } from '@angular/core';
import { Category } from '../category.model';
import { Router } from '@angular/router';
import { Item } from '../item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private router: Router) { }

  categories: Category[] = [
    new Category(1, "sales", [
      new Item("elephant lamps", "whatever", 10),
      new Item("Time Maching", "it may work", 200),
      new Item("Pine Tree", "a little old", 20)
    ]),
    new Category(2, "housing", [
      new Item("A cozy appartment", "1234 NE StreetName, #777, Portland, OR", 1000),
      new Item("A townhouse", "1324 NE StreetName, Portland, OR", 1500),
      new Item("Room next to mine", "2114 NE StreetName, Portland, OR", 100)
    ]),
    new Category(3, "jobs", [
      new Item("Salesman ", "1234 NE StreetName, #777, Portland, OR", 40000),
      new Item("Developer", "1324 NE StreetName, Portland, OR", 100000),
      new Item("Clown", "2114 NE StreetName, Portland, OR", 10000)
    ])
  ];



  categoryIsClicked(clickedCategory: Category) {
    this.router.navigate(['categories', clickedCategory.id]);
  }

}
