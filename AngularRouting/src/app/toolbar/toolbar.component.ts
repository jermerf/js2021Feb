import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  animatedStarRating = 0
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.animatedStarRating = (this.animatedStarRating + 0.5) % 5.5

    }, 100)
  }

}
