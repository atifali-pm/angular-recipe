import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';


@NgModule({
  declarations: [RecipeStartComponent],
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
