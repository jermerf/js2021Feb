var grid = document.createElement('div')
grid.classList.add("grid")

document.body.appendChild(grid)

const G_WIDTH = 12
const G_HEIGHT = 12
const BLOCK_HEIGHT = 30
const BLOCK_WIDTH = (window.innerWidth - 50) / G_WIDTH

const game = {
  score: 0,
  blocks: []
}
class Block {

  x
  y
  type = 0
  el = document.createElement('div')
  constructor(x, y) {
    this.el.addEventListener('click', blockClicked)
    this.el.style.transition = "all 0.5s"
    this.el.style.position = "absolute"
    this.move(x, y)
    this.resetType()
  }
  move(x, y) {
    if (game.blocks[x] && game.blocks[x][y]) {
      let tmp = game.blocks[x][y]
      game.blocks[this.x][this.y] = tmp
      game.blocks[tmp.x][tmp.y] = this
      tmp.x = this.x
      tmp.y = this.y
      tmp.update()
    }
    this.x = x
    this.y = y
    this.update()
  }
  resetType() {
    this.type = Math.floor(Math.random() * 6)
    this.update()
  }
  update() {
    // this.el.style.gridColumn = this.x + 1
    // this.el.style.gridRow = this.y + 1 //transform = `translateX(${this.y*BLOCK_HEIGHT}px)`

    this.el.style.minHeight = BLOCK_HEIGHT + "px"
    this.el.style.minWidth = (window.innerWidth - 50) / G_WIDTH + "px"
    this.el.style.top = this.y * BLOCK_HEIGHT + "px"
    this.el.style.left = this.x * BLOCK_WIDTH + "px"
    this.el.style.backgroundColor = typeToColor(this.type)
    // this.el.innerText = `${this.x}, ${this.y}`
  }

}


for (let i = 0; i < G_WIDTH; i++) {
  let row = []
  game.blocks.push(row)
  for (let j = 0; j < G_HEIGHT; j++) {
    let block = new Block(i, j)
    grid.appendChild(block.el)
    row.push(block)
  }
}

function replaceScoredBlocks(blocks) {
  for (let b of blocks) {
    b.el.style.opacity = 0
    b.el.style.transition = ""
    setTimeout(() => {
      b.el.style.transition = "all 0.5s"
      b.el.style.opacity = 1
    }, 500)
    b.resetType()
    while (b.y > 0) {
      b.move(b.x, b.y - 1)
    }
  }
}

function scoreBlockColor(data) {
  var scoreBlocks = [data] // []
  var searchBlocks = [data]
  // console.log(data)
  for (let i = 0; i < searchBlocks.length; i++) {
    let b = searchBlocks[i]
    if (b.x - 1 >= 0) { //Left
      if (game.blocks[b.x - 1][b.y].type === b.type // Same type
        && !scoreBlocks.find(el => el.x === b.x - 1 && el.y === b.y)
        && !searchBlocks.find(el => el.x === b.x - 1 && el.y === b.y)) {
        scoreBlocks.push(game.blocks[b.x - 1][b.y])
        searchBlocks.push(game.blocks[b.x - 1][b.y])
      }
    }
    if (b.x + 1 < G_WIDTH) { //Right
      if (game.blocks[b.x + 1][b.y].type === b.type // Same type
        && !scoreBlocks.find(el => el.x === b.x + 1 && el.y === b.y)
        && !searchBlocks.find(el => el.x === b.x + 1 && el.y === b.y)) {
        scoreBlocks.push(game.blocks[b.x + 1][b.y])
        searchBlocks.push(game.blocks[b.x + 1][b.y])
      }
    }
    if (b.y - 1 >= 0) { //Top
      if (game.blocks[b.x][b.y - 1].type === b.type // Same type
        && !scoreBlocks.find(el => el.x === b.x && el.y === b.y - 1)
        && !searchBlocks.find(el => el.x === b.x && el.y === b.y - 1)) {
        scoreBlocks.push(game.blocks[b.x][b.y - 1])
        searchBlocks.push(game.blocks[b.x][b.y - 1])
      }
    }
    if (b.y + 1 < G_HEIGHT) { //Bottom
      if (game.blocks[b.x][b.y + 1].type === b.type // Same type
        && !scoreBlocks.find(el => el.x === b.x && el.y === b.y + 1)
        && !searchBlocks.find(el => el.x === b.x && el.y === b.y + 1)) {
        scoreBlocks.push(game.blocks[b.x][b.y + 1])
        searchBlocks.push(game.blocks[b.x][b.y + 1])
      }
    }
  }
  if (scoreBlocks.length >= 3) {
    game.score += scoreBlocks.length
    replaceScoredBlocks(scoreBlocks)
    console.log("Score", game.score)
  } else {
    for (let b of scoreBlocks) {
      b.el.style.opacity = 0.5
      setTimeout(() => {
        b.el.style.opacity = 1
      }, 500)
    }
  }
}

function blockClicked(event) {
  var data = null
  for (let i = 0; i < G_WIDTH; i++) {
    data = game.blocks[i].find(block => block.el === event.target)
    if (data) {
      break
    }
  }
  if (data) {
    scoreBlockColor(data)
  }
}



function typeToColor(type) {
  switch (type) {
    case 0: return "#3355ee" //Blue
    case 1: return "#269646" //Green
    case 2: return "#d82236" //Red
    case 3: return "#ffe91a" //Yellow
    case 4: return "#aa55bb" //Purple
    case 5: return "#ff8800" //Orange
  }
}
