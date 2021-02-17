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

}
