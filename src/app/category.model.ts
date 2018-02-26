import { Item } from './item.model';

export class Category {
  constructor(public id: number, public title: string, public listOfItems: Item[]) {}
}
