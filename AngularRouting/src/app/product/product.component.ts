import { Component, OnInit, Input } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartService } from '../shopping-cart.service';
import Product from '../viewmodel/Product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  iconCartAdd = faCartPlus
  @Input() p: Product = new Product("bicycle.jpg", "Fake bic", "tmp",
    4.23, 5, false)
  constructor(private shoppingService: ShoppingCartService) { }


  addToCart(item: Product) {
    this.shoppingService.addToCart(item)
  }

}
