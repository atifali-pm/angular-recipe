import {IngredientModule} from '../shared/ingredient.module';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<IngredientModule[]>();

  private ingredients: IngredientModule[] = [
    new IngredientModule('Apples', 3),
    new IngredientModule('Mangoes', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModule) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }


}
