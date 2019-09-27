import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModule} from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<void>();

  // tslint:disable-next-line:no-input-rename
  @Input() recipe: RecipeModule;
  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.selectedRecipe.emit();
  }

}
