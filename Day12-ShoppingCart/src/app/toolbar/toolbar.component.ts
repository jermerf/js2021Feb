import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  iconCart = faShoppingCart
  constructor() { }

  ngOnInit(): void {
  }

}
