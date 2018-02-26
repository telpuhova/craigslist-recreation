import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../item.model';
import { Category } from '../category.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) {

  }
  categoryId: number = null;

  items: Item[] = [
    new Item("1", "1", 1),
    new Item("1", "1", 1),
    new Item("1", "1", 1)
  ];

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = parseInt(urlParameters['id']);
    });
    this.getItems();
  }

  getItems() {
    if (this.categoryId == 1) {
      this.items = [
        new Item("elephant lamps", "whatever", 10),
        new Item("Time Maching", "it may work", 200),
        new Item("Pine Tree", "a little old", 20)
      ];
    } else if (this.categoryId == 2) {
      this.items = [
        new Item("A cozy appartment", "1234 NE StreetName, #777, Portland, OR", 1000),
        new Item("A townhouse", "1324 NE StreetName, Portland, OR", 1500),
        new Item("Room next to mine", "2114 NE StreetName, Portland, OR", 100)
      ];
    } else if (this.categoryId == 3) {
      this.items = [
        new Item("Salesman ", "1234 NE StreetName, #777, Portland, OR", 40000),
        new Item("Developer", "1324 NE StreetName, Portland, OR", 100000),
        new Item("Clown", "2114 NE StreetName, Portland, OR", 10000)
      ];
    } else {
      this.items = [
        new Item("0 ", "0", 0),
        new Item("0", "0", 0),
        new Item("0", "0", 0)
      ];
    }
  }

}
