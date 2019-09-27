import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IngredientModule {
  constructor(public name: string, public amount: number) {
  }
}
