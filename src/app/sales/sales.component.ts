import { Component } from '@angular/core';
import { Item } from '../item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent  {
  constructor(private router: Router) {}

  items: Item[] = [
    new Item("elephant lamps", 10),
    new Item("Time Maching", 200),
    new Item("Pine Tree", 20)
  ];




}
