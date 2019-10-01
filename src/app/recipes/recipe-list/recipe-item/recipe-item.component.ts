import {Component, Input, OnInit} from '@angular/core';
import {RecipeModule} from '../../recipe.module';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input() recipe: RecipeModule;

  @Input() index: number;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.showRecipe(this.recipe);
  }

}
