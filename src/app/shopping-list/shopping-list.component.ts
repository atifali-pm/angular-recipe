import {Component, OnInit} from '@angular/core';
import {IngredientModule} from '../shared/ingredient.module';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModule[];

  constructor(private shoppingListServie: ShoppingListService) {
  }

  ngOnInit() {
    // @ts-ignore
    this.ingredients = this.shoppingListServie.getIngredients();
    this.shoppingListServie.ingredientsChanged
      .subscribe(
        (ingredient: IngredientModule[]) => {
          this.ingredients = ingredient;
        }
      );
  }
}
