import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Costela', 'Very Tasty', 'costela.jpg', []),
    new Recipe('Maionese', 'Okayish', 'maionese.jpg', [])
  ];

  //recipe: Recipe = new Recipe('Dumy', 'Dumy', 'favicon.ico', []);

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
