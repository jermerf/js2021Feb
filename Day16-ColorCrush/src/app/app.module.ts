import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { ColorCrushComponent } from './color-crush/color-crush.component';
import { RatingStarComponent } from './rating-star/rating-star.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorCrushComponent,
    RatingStarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
