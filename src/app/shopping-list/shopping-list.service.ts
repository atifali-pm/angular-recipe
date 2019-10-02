import {IngredientModule} from '../shared/ingredient.module';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<IngredientModule>();

  private ingredients: IngredientModule[] = [
    new IngredientModule('Apples', 3),
    new IngredientModule('Mangoes', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientModule) {
    this.ingredients.push(ingredient);
    // @ts-ignore
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
