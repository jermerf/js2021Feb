import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalf, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartService } from '../shopping-cart.service';
import Product from "../viewmodel/Product";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  iconStar = faStar
  iconStarHalf = faStarHalf
  iconCartAdd = faCartPlus
  products = [
    new Product("bear.jpg", "Teddy Bear", "Stuffed with the hopes and dreams of childhood", 11.99, 4.3, true),
    new Product("bicycle.jpg", "Bicycle", "A two wheeled bipedal propulsion device", 189.99, 4.6, true),
    new Product("coffee.jpg", "Coffee Maker", "Brew the perfect cup of animal poop", 39.99, 3, false),
    new Product("bear.jpg", "Teddy Bear", "Stuffed with the hopes and dreams of childhood", 11.99, 4.3, true),
    new Product("bicycle.jpg", "Bicycle", "A two wheeled bipedal propulsion device", 189.99, 4.6, true),
    new Product("coffee.jpg", "Coffee Maker", "Brew the perfect cup of animal poop", 39.99, 3, false),
    new Product("bear.jpg", "Teddy Bear", "Stuffed with the hopes and dreams of childhood", 11.99, 4.3, true),
    new Product("bicycle.jpg", "Bicycle", "A two wheeled bipedal propulsion device", 189.99, 4.6, true),
    new Product("coffee.jpg", "Coffee Maker", "Brew the perfect cup of animal poop", 39.99, 3, false),
    new Product("bear.jpg", "Teddy Bear", "Stuffed with the hopes and dreams of childhood", 11.99, 4.3, true),
    new Product("bicycle.jpg", "Bicycle", "A two wheeled bipedal propulsion device", 189.99, 4.6, true),
    new Product("coffee.jpg", "Coffee Maker", "Brew the perfect cup of animal poop", 39.99, 3, false),
  ]

  constructor(private shoppingService: ShoppingCartService) { }

  ngOnInit(): void { }

}
