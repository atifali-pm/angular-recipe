import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IngredientModule} from '../../shared/ingredient.module';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ts-ignore
  @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  AddIngridient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new IngredientModule(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);

  }

}
