import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { ProductsComponent } from './products/products.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { ColorCrushComponent } from './color-crush/color-crush.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    CartItemsComponent,
    ProductsComponent,
    RatingStarComponent,
    ColorCrushComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
