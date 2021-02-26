import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';
import Product from "../viewmodel/Product";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.products.subscribe(products => {
      this.products = products
    })
  }

}
