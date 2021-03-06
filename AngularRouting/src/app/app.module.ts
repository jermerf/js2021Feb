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
import { AboutComponent } from './about/about.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    CartItemsComponent,
    ProductsComponent,
    RatingStarComponent,
    ColorCrushComponent,
    AboutComponent,
    SearchBoxComponent,
    SearchResultsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
