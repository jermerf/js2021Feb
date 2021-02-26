import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ColorCrushComponent } from './color-crush/color-crush.component';
import { ProductsComponent } from './products/products.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'game', component: ColorCrushComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search/:query', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
