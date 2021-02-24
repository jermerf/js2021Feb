import { Component, ElementRef, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColorCrushService } from '../color-crush-service.service';

@Component({
  selector: 'color-crush',
  templateUrl: './color-crush.component.html',
  styleUrls: ['./color-crush.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorCrushComponent implements AfterViewInit {
  @ViewChild('thegrid') grid: ElementRef<HTMLDivElement>
  description = ""
  constructor(private service: ColorCrushService) { }

  ngAfterViewInit(): void {
    this.service.setContainerSize(
      this.grid.nativeElement.offsetWidth,
      this.grid.nativeElement.offsetHeight)
    let niceWidth = Math.round(this.service.blockWidth)
    let niceHeight = Math.round(this.service.blockHeight)
    this.description = `${niceWidth}x${niceHeight}`
    this.service.setBlockParent(this.grid.nativeElement)
  }

}
