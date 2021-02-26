import { ColorCrushService } from "../color-crush-service.service"

export const COLORS = [
  "#3355ee", //Blue
  "#269646", //Green
  "#d82236", //Red
  "#ffe91a", //Yellow
  "#aa55bb", //Purple
  "#ff8800" //Orange
]

export class Block {
  x
  y
  type = 0
  el = document.createElement('div')
  service: ColorCrushService

  constructor(service, x, y) {
    this.service = service
    this.el.addEventListener('click', () => this.blockClicked())
    service.move(this, x, y)
    this.resetType()
  }


  resetType() {
    this.type = Math.floor(Math.random() * COLORS.length)
    this.update()
  }
  update() {
    this.el.style.top = this.y * this.service.blockHeight + "px"
    this.el.style.left = this.x * this.service.blockWidth + "px"
    this.el.style.backgroundColor = COLORS[this.type]
  }

  blockClicked() {
    this.service.scoreBlockColor(this)
  }

}