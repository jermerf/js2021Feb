import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import Product from './viewmodel/Product';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart = new BehaviorSubject([])
  items = this.shoppingCart.asObservable()

  constructor() { }

  addToCart(item: Product) {
    this.shoppingCart.next([...this.shoppingCart.value, item])
  }

  removeFromCart(item: Product) {
    let i = this.shoppingCart.value.indexOf(item)
    let before = this.shoppingCart.value.slice(0, i)
    let after = this.shoppingCart.value.slice(i + 1, this.shoppingCart.value.length)
    this.shoppingCart.next([...before, ...after])
  }

}
