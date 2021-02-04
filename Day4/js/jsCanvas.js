// Hello world
var can = document.createElement('canvas')
can.width = 500
can.height = 500
can.style.border = "2px dashed red"
document.body.appendChild(can)

var ctx = can.getContext('2d')

function drawOffset(offset) {
  ctx.strokeRect(offset, offset, 100, 100)
}


function drawGhostManually(radius = 50) {
  ctx.beginPath()
  ctx.moveTo(150, 150)
  ctx.arc(100, 100, radius, 0, Math.PI, true)
  ctx.lineTo(50, 150)

  let squiggleStep = 2 * radius / 6
  ctx.lineTo(50 + 1 * squiggleStep, 150 - squiggleStep)
  ctx.lineTo(50 + 2 * squiggleStep, 150)
  ctx.lineTo(50 + 3 * squiggleStep, 150 - squiggleStep)
  ctx.lineTo(50 + 4 * squiggleStep, 150)
  ctx.lineTo(50 + 5 * squiggleStep, 150 - squiggleStep)
  ctx.lineTo(50 + 6 * squiggleStep, 150)


  ctx.stroke()
}

function drawGhost(x = 0, y = 0, radius = 50) {
  ctx.beginPath()
  ctx.moveTo(x + 2 * radius, y + 2 * radius)
  ctx.arc(x + radius, y + radius, radius, 0, Math.PI, true)
  ctx.lineTo(x, y + 2 * radius)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(x, y + 2 * radius)
  let squiggleStep = 2 * radius / 6
  for (var i = 1; i <= 6; i++) {
    let yDir = (i % 2 === 0 ? 0 : squiggleStep)
    ctx.lineTo(x + squiggleStep * i, y + 2 * radius - yDir)
    ctx.stroke()
  }
  ctx.stroke()
}

class Ghost {
  x = 200
  y = 200
  r = 50
  baseRadius = 50
  thet = 0
  thetSpeed = 0.1 + Math.random() / 10
  speedX = 2 * (Math.random() - 0.5)
  speedY = 2 * (Math.random() - 0.5)
  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.thet += this.thetSpeed
    this.r = this.baseRadius + 10 * Math.sin(this.thet)
  }
}

var ghosts = []

function drawFrame() {
  ctx.clearRect(0, 0, can.width, can.height)
  for (var ghost of ghosts) {
    ghost.update()
    drawGhost(ghost.x, ghost.y, ghost.r)
  }
}

for (let i = 0; i < 10; i++) {
  ghosts.push(new Ghost())
}
setInterval(drawFrame, 30)