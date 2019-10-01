import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [RecipeStartComponent, RecipeEditComponent],
  imports: [
    CommonModule
  ]
})
export class RecipeModule {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }

}
