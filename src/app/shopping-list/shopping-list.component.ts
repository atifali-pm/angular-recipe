import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModule} from '../shared/ingredient.module';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: IngredientModule[];
  private subscription: Subscription;

  constructor(private shoppingListServie: ShoppingListService) {
  }

  ngOnInit() {
    // @ts-ignore
    this.ingredients = this.shoppingListServie.getIngredients();
    this.subscription = this.shoppingListServie.ingredientsChanged
      .subscribe(
        (ingredient: IngredientModule[]) => {
          this.ingredients = ingredient;
        }
      );
  }

  onEditItem(index: number) {
    this.shoppingListServie.startedEditing.next(index);
  }

  ngOnDestory() {
    this.subscription.unsubscribe();
  }
}
