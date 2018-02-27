import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(id: number, name: string, description: string, price: number) {
    let newItem: Item = new Item(id, name, description, price);

  }

}
