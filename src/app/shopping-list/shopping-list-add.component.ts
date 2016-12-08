import { Ingredient } from './../shared/ingredient';
import { Component, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  @Input()
  private item: Ingredient;
  private isAdd = true;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnChanges(changes) {
    this.isAdd = changes.item.currentValue === null;
    if (this.isAdd) {
      this.item = new Ingredient("", 0);
    }
  }

  onSubmit(ingredient: Ingredient) {
    console.log(this.item);
    let newItem = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.shoppingListService.editItem(this.item, newItem);
    } else {
      this.item = newItem;
      this.shoppingListService.addItem(this.item);
    }

  }

}
