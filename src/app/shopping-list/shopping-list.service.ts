import { Ingredient } from './../shared/ingredient';

export class ShoppingListService {

  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  editItem(currentItem: Ingredient, newItem: Ingredient) {
    let items = this.items;
    items[items.indexOf(currentItem)] = newItem;
  }

}
