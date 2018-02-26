import { Component } from '@angular/core';
import { Category } from '../category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private router: Router) { }

  categories: Category[] = [
    new Category(1, "sales"),
    new Category(2, "housing"),
    new Category(3, "jobs")
  ];

  categoryIsClicked(clickedCategory: Category) {
    this.router.navigate(['categories', clickedCategory.id]);
  }

}
