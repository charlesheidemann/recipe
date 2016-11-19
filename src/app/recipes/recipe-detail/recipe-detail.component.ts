import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  private recipeIndex: number = 1;

  constructor(private shoppingListService: ShoppingListService, private router: Router) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.router.navigate(['/recipes']);
  }

}
