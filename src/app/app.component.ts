import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feature = 'recipe';

  onFeatureSelected(featureSelected) {
    this.feature = featureSelected;
  }

}
