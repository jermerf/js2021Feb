import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RatingStarComponent implements OnInit {
  @Input() stars: number = 0

  icon = {
    half: faStarHalf,
    full: faStar
  }


  constructor() { }

  ngOnInit(): void {
  }

}
