import {Component, OnInit} from '@angular/core';
import {RecipeModule} from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModule[] = [
    // tslint:disable-next-line:max-line-length
    new RecipeModule('Test Recipe', 'Test reciep description', 'https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg'),
    // tslint:disable-next-line:max-line-length
    new RecipeModule('Test Recipe 2', 'Test reciep description 2', 'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
