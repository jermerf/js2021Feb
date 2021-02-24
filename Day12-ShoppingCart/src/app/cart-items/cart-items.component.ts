import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartService } from '../shopping-cart.service';
import Product from '../viewmodel/Product';

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  iconCart = faShoppingCart
  cartItems: Array<Product> = []
  showCart = false

  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingService.items.subscribe(items => {
      this.cartItems = items
    })
  }

}
