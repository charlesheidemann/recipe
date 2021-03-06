import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RecipeService } from '../recipe.service';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  // recipe: Recipe = new Recipe('Dumy', 'Dumy', 'favicon.ico', []);
  recipes: Recipe[] = [];

  // @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onSelected(recipe: Recipe) {
  //   this.recipeSelected.emit(recipe);
  // }

}
