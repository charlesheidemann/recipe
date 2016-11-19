import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipeRoutingModule } from './recipes/recipe-routing.module';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                { path: '', redirectTo: '/recipes', pathMatch: 'full' },
                { path: 'recipes', component: RecipesComponent, children: RecipeRoutingModule },
                { path: 'shopping-list', component: ShoppingListComponent }
            ]
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
