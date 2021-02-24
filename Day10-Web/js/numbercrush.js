const G_WIDTH = 30
const G_HEIGHT = 20

function getBlockWidth() {
  return Math.floor(window.innerWidth / G_WIDTH)
}

function getBlockHeight() {
  return Math.floor(window.innerHeight / G_HEIGHT)
}
const game = {
  grid: document.createElement('div'),
  styles: document.createElement('style'),
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
    this.type = Math.floor(Math.random() * COLORS.length)
    this.update()
  }
  update() {
    // this.el.style.gridColumn = this.x + 1
    // this.el.style.gridRow = this.y + 1 //transform = `translateX(${this.y*getBlockWidth()}px)`
    this.el.style.top = this.y * getBlockHeight() + "px"
    this.el.style.left = this.x * getBlockWidth() + "px"
    this.el.style.backgroundColor = COLORS[this.type]
    // this.el.innerText = `${this.x}, ${this.y}`
  }

}

const COLORS = [
  "#3355ee", //Blue
  "#269646", //Green
  "#d82236", //Red
  "#ffe91a", //Yellow
  "#aa55bb", //Purple
  "#ff8800" //Orange
]

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

function blockClicked(event) {
  var block
  for (let i = 0; i < G_WIDTH; i++) {
    // Find block by matching to the click target
    if (block = game.blocks[i].find(block => block.el === event.target))
      break
    /*
    // The same thing but stretched out a bit
    let row = game.blocks[i]
    // Find block by matching to the click target
    block = row.find(block => block.el === event.target) 
    if(block){
      break
    }
    */
  }
  if (block) {
    scoreBlockColor(block)
  }
}

function scoreBlockColor(data) {
  var searchBlocks = [data]
  for (let i = 0; i < searchBlocks.length; i++) {
    let b = searchBlocks[i]
    if (b.x - 1 >= 0) { //Left
      if (game.blocks[b.x - 1][b.y].type === b.type // Same type
        && !searchBlocks.find(el => el.x === b.x - 1 && el.y === b.y)) {
        searchBlocks.push(game.blocks[b.x - 1][b.y])
      }
    }
    if (b.x + 1 < G_WIDTH) { //Right
      if (game.blocks[b.x + 1][b.y].type === b.type // Same type
        && !searchBlocks.find(el => el.x === b.x + 1 && el.y === b.y)) {
        searchBlocks.push(game.blocks[b.x + 1][b.y])
      }
    }
    if (b.y - 1 >= 0) { //Top
      if (game.blocks[b.x][b.y - 1].type === b.type // Same type
        && !searchBlocks.find(el => el.x === b.x && el.y === b.y - 1)) {
        searchBlocks.push(game.blocks[b.x][b.y - 1])
      }
    }
    if (b.y + 1 < G_HEIGHT) { //Bottom
      if (game.blocks[b.x][b.y + 1].type === b.type // Same type
        && !searchBlocks.find(el => el.x === b.x && el.y === b.y + 1)) {
        searchBlocks.push(game.blocks[b.x][b.y + 1])
      }
    }
  }
  if (searchBlocks.length >= 3) {
    game.score += searchBlocks.length
    replaceScoredBlocks(searchBlocks)
    console.log("Score", game.score)
  } else {
    for (let b of searchBlocks) {
      b.el.style.opacity = 0.5
      setTimeout(() => {
        b.el.style.opacity = 1
      }, 500)
    }
  }
}


// var autoClick = {
//   color: 0,
//   colorCount: 0
// }
// setInterval(() => {
//   if (autoClick.colorCount++ % 1 === 0)
//     autoClick.color = Math.floor(Math.random() * COLORS.length)
//   for (let i = 0; i < 10; i++) {
//     let ri = Math.floor(Math.random() * game.blocks.length)
//     let rj = Math.floor(Math.random() * game.blocks[0].length)
//     let block = game.blocks[ri][rj]
//     if (block.type === autoClick.color)
//       scoreBlockColor(block)
//   }
// }, 100)

function resetStyles() {
  while (game.styles.sheet.rules.length > 0) {
    game.styles.sheet.removeRule(0)
  }
  game.styles.sheet.insertRule(`
    div.grid > div {
      transition: all 0.5s;
      position: absolute;
      width: ${getBlockWidth()}px;
      height: ${getBlockHeight()}px;
    }
  `)
}

// Start the game when loaded
document.addEventListener("DOMContentLoaded", () => {
  document.head.appendChild(game.styles)
  game.grid.classList.add("grid")
  resetStyles()
  window.addEventListener("resize", () => {
    resetStyles()

    for (let i = 0; i < G_WIDTH; i++)
      for (let j = 0; j < G_HEIGHT; j++)
        game.blocks[i][j].update()
  })
  document.body.style.overflow = "hidden"
  document.body.style.margin = 0

  // Create blocks
  for (let i = 0; i < G_WIDTH; i++) {
    let row = []
    game.blocks.push(row)
    for (let j = 0; j < G_HEIGHT; j++) {
      let block = new Block(i, j)
      game.grid.appendChild(block.el)
      row.push(block)
    }
  }

  // Adjust for resize

  // Show grid
  document.body.appendChild(game.grid)
})


