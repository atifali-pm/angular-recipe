import {Component, OnInit} from '@angular/core';
import {RecipeModule} from './recipe.module';
import {RecipeService} from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  detailRecipe: RecipeModule;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.selectedRecipe
      .subscribe(
        (recipe: RecipeModule) => {
          this.detailRecipe = recipe;
        }
      );
  }
}
