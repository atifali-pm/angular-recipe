import {IngredientModule} from '../shared/ingredient.module';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingListService {

  startedEditing = new Subject<number>();
  ingredientsChanged = new Subject<IngredientModule>();

  private ingredients: IngredientModule[] = [
    new IngredientModule('Apples', 3),
    new IngredientModule('Mangoes', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: IngredientModule) {
    this.ingredients.push(ingredient);
    // @ts-ignore
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: IngredientModule) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.getIngredients());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.getIngredients());
  }


}
