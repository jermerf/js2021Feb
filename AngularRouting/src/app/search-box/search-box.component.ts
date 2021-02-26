import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  query = ""

  constructor(private router: Router) { }

  search() {
    this.router.navigate(["/search", this.query])
  }

}
