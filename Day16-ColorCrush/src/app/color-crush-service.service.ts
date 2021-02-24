import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Block } from './color-crush/Block';

@Injectable({
  providedIn: 'root'
})
export class ColorCrushService {
  private _score = new BehaviorSubject(0)
  private _blocks = new BehaviorSubject<Array<Array<Block>>>([])
  private containerWidth = new BehaviorSubject(100)
  private containerHeight = new BehaviorSubject(100)
  score = this._score.asObservable()
  blocks = this._blocks.asObservable()
  G_WIDTH = 30
  G_HEIGHT = 20
  constructor() {
    let blocks = []
    // Create blocks
    for (let i = 0; i < this.G_WIDTH; i++) {
      let row = []
      for (let j = 0; j < this.G_HEIGHT; j++) {
        let block = new Block(this, i, j)
        row.push(block)
      }
      blocks.push(row)
    }
    this._blocks.next(blocks)
  }

  get blockHeight(): number {
    return this.containerHeight.value / this.G_HEIGHT
  }

  get blockWidth(): number {
    return this.containerWidth.value / this.G_WIDTH
  }
  setContainerSize(w: number, h: number): void {
    this.containerWidth.next(w)
    this.containerHeight.next(h)
  }

  setBlockParent(parent: HTMLElement) {
    let blocks = this._blocks.value
    for (let i = 0; i < blocks.length; i++) {
      let row = blocks[i]
      for (let j = 0; j < row.length; j++) {
        let block = row[j]
        parent.appendChild(block.el)
        block.update()
      }
    }
    this.resetBlockSizes()
  }

  move(block, x, y) {
    let blocks = this._blocks.value
    if (blocks[x] && blocks[x][y]) {
      let tmp = blocks[x][y]
      blocks[block.x][block.y] = tmp
      blocks[tmp.x][tmp.y] = block
      tmp.x = block.x
      tmp.y = block.y
      tmp.update()
    }
    block.x = x
    block.y = y
    block.update()
  }

  replaceScoredBlocks(blocks: Array<Block>) {
    for (let b of blocks) {
      b.el.style.opacity = "0"
      b.el.style.transition = ""
      setTimeout(() => {
        b.el.style.transition = "all 0.5s"
        b.el.style.opacity = "1"
      }, 500)
      b.resetType()
      while (b.y > 0) {
        this.move(b, b.x, b.y - 1)
      }
    }
  }


  scoreBlockColor(data) {
    let searchBlocks = [data]
    let blocks = this._blocks.value

    for (let i = 0; i < searchBlocks.length; i++) {
      let b = searchBlocks[i]
      if (b.x - 1 >= 0) { //Left
        if (blocks[b.x - 1][b.y].type === b.type // Same type
          && !searchBlocks.find(el => el.x === b.x - 1 && el.y === b.y)) {
          searchBlocks.push(blocks[b.x - 1][b.y])
        }
      }
      if (b.x + 1 < this.G_WIDTH) { //Right
        if (blocks[b.x + 1][b.y].type === b.type // Same type
          && !searchBlocks.find(el => el.x === b.x + 1 && el.y === b.y)) {
          searchBlocks.push(blocks[b.x + 1][b.y])
        }
      }
      if (b.y - 1 >= 0) { //Top
        if (blocks[b.x][b.y - 1].type === b.type // Same type
          && !searchBlocks.find(el => el.x === b.x && el.y === b.y - 1)) {
          searchBlocks.push(blocks[b.x][b.y - 1])
        }
      }
      if (b.y + 1 < this.G_HEIGHT) { //Bottom
        if (blocks[b.x][b.y + 1].type === b.type // Same type
          && !searchBlocks.find(el => el.x === b.x && el.y === b.y + 1)) {
          searchBlocks.push(blocks[b.x][b.y + 1])
        }
      }
    }

    if (searchBlocks.length >= 3) {
      this._score.next(this._score.value + searchBlocks.length)
      this.replaceScoredBlocks(searchBlocks)
      console.log("Score", this._score.value)
    } else {
      for (let b of searchBlocks) {
        b.el.style.opacity = 0.5
        setTimeout(() => {
          b.el.style.opacity = 1
        }, 500)
      }
    }
  }

  resetBlockSizes() {
    let blocks = this._blocks.value
    let w = this.blockWidth + "px"
    let h = this.blockHeight + "px"
    for (let i = 0; i < blocks.length; i++) {
      let row = blocks[i]
      for (let j = 0; j < row.length; j++) {
        let block = row[j]
        block.el.style.width = w
        block.el.style.height = h
      }
    }
  }
}
