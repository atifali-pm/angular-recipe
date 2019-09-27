import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModule} from './recipe.module';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  detailRecipe: RecipeModule;

  constructor() {
  }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: RecipeModule) {
    this.detailRecipe = recipe;
  }
}
