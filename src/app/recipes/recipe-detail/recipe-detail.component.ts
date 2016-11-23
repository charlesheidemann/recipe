import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recipe';
import { RecipeService } from '../../recipes/recipe.service';


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  private selectedRecipe: Recipe;

  private subscribed: Subscription;

  private recipeIndex: number;

  constructor(private shoppingListService: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute,
    private service: RecipeService) { }

  ngOnInit() {
    this.subscribed = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.service.getRecipe(this.recipeIndex);
      });
  }

  ngOnDestroy() {
    this.subscribed.unsubscribe();
  }


  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.service.delete(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

}
