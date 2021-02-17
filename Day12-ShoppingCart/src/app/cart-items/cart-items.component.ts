import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import Product from '../viewmodel/Product';

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems: Array<Product> = []
  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingService.items.subscribe(items => {
      this.cartItems = items
    })
  }

}
