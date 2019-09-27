import {Component, Input, OnInit} from '@angular/core';
import {RecipeModule} from '../recipe.module';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModule;
  constructor() { }

  ngOnInit() {
  }

}
