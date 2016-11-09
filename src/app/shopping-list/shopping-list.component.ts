import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [
    new Ingredient('teste', 5)
  ];

constructor() { }

ngOnInit() {
}

}
