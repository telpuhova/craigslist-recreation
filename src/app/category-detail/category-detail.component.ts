import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../item.model';
import { Category } from '../category.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MainPageComponent } from '../main-page/main-page.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location, private router: Router) {

  }
  categoryId: number = null;

  items: Item[] = [
    new Item(1,"1", "1", 1),
    new Item(1,"1", "1", 1),
    new Item(1,"1", "1", 1)
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
        new Item(1, "elephant lamps", "whatever", 10),
        new Item(2, "Time Maching", "it may work", 200),
        new Item(3, "Pine Tree", "a little old", 20)
      ];
    } else if (this.categoryId == 2) {
      this.items = [
        new Item(1, "A cozy appartment", "1234 NE StreetName, #777, Portland, OR", 1000),
        new Item(2,"A townhouse", "1324 NE StreetName, Portland, OR", 1500),
        new Item(3, "Room next to mine", "2114 NE StreetName, Portland, OR", 100)
      ];
    } else if (this.categoryId == 3) {
      this.items = [
        new Item(1, "Salesman ", "1234 NE StreetName, #777, Portland, OR", 40000),
        new Item(2, "Developer", "1324 NE StreetName, Portland, OR", 100000),
        new Item(3, "Clown", "2114 NE StreetName, Portland, OR", 10000)
      ];
    } else {
      this.items = [
        new Item(0,"0 ", "0", 0),
        new Item(0, "0", "0", 0),
        new Item(0,"0", "0", 0)
      ];
    }
  }

  // itemIsClicked(clickedItem) {
  //   alert("hi");
  // }

  itemIsClicked(clickedItem: Item) {
    this.router.navigate(['items', clickedItem.id]);
  }

  showClicked(clickedItem: Item) {
    $(".tohide").show();
  }

}
