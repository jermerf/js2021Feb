import { Component, OnInit } from '@angular/core';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartService } from '../shopping-cart.service';
import Product from "../viewmodel/Product";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  iconCartAdd = faCartPlus
  products = [
    new Product("bear.jpg", "Teddy Bear", "Stuffed with the hopes and dreams of childhood", 11.99, 5, true),
    new Product("bicycle.jpg", "Bicycle", "A two wheeled bipedal propulsion device", 189.99, 4.5, true),
    new Product("coffee.jpg", "Coffee Maker", "Brew the perfect cup of animal poop", 39.99, 4, false),
    new Product("bear.jpg", "Teddy Bear", "Stuffed with the hopes and dreams of childhood", 11.99, 3.5, true),
    new Product("bicycle.jpg", "Bicycle", "A two wheeled bipedal propulsion device", 189.99, 3, true),
    new Product("coffee.jpg", "Coffee Maker", "Brew the perfect cup of animal poop", 39.99, 2.5, false),
    new Product("bear.jpg", "Teddy Bear", "Stuffed with the hopes and dreams of childhood", 11.99, 2, true),
    new Product("bicycle.jpg", "Bicycle", "A two wheeled bipedal propulsion device", 189.99, 1.5, true),
    new Product("coffee.jpg", "Coffee Maker", "Brew the perfect cup of animal poop", 39.99, 1, false),
    new Product("bear.jpg", "Teddy Bear", "Stuffed with the hopes and dreams of childhood", 11.99, 0.5, true),
    new Product("bicycle.jpg", "Bicycle", "A two wheeled bipedal propulsion device", 189.99, 0, true),
    new Product("coffee.jpg", "Coffee Maker", "Brew the perfect cup of animal poop", 39.99, 3, false),
  ]

  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit(): void { }

}
