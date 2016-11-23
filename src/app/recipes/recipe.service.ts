import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Costela', 'Very Tasty', 'costela.jpg', [
      new Ingredient('Ribs', 1),
      new Ingredient('Salt', 1)
    ]),
    new Recipe('Maionese', 'Okayish', 'maionese.jpg', [
      new Ingredient('Potato', 5),
      new Ingredient('Maionese', 1)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  delete(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
