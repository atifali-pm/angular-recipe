import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModule} from '../../shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredient = new EventEmitter<IngredientModule>();

  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ts-ignore
  @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor() {
  }

  ngOnInit() {
  }

  AddIngridient() {
    this.ingredient.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    });
  }

}
