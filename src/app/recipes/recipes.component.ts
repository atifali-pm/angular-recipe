import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeModule} from './recipe.module';
import {RecipeService} from './recipe.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {
  detailRecipe: RecipeModule;

  private subscription: Subscription;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.selectedRecipe
      .subscribe(
        (recipe: RecipeModule) => {
          this.detailRecipe = recipe;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
