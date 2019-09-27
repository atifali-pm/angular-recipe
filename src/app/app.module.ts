import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HighlightGreenDirective } from './shared/highlight-green.directive';
import { BetterHighlightDirective } from './shared/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightGreenDirective,
    BetterHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
