import {Component, OnInit} from '@angular/core';
import {IngredientModule} from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModule[] = [
    new IngredientModule('Apples', 3),
    new IngredientModule('Mangoes', 5),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
