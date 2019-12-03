var canvas = ctx = null
var viewportX = viewportY = 0
var gridSize = tc = 20

trail = []
tail = 5

window.onload = function() {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  document.addEventListener('keydown', keyPush)
  setInterval(game, 1000 / 15)
}

var screen = {
  draw: function ({ width, height }, ctx) {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, width, height)
  }
}
var food = {
  x: 15,
  y: 15,
  spawn: function() {
    this.x = Math.floor(Math.random() * gridSize) 
    this.y = Math.floor(Math.random() * gridSize) 
  },
  draw: function (ctx) {
    ctx.fillStyle = 'red'
    ctx.fillRect(
      this.x * gridSize, 
      this.y * gridSize, 
      gridSize - 2, 
      gridSize - 2
    )
  }
}
var snake = {
  x: viewportX,
  y: viewportY,
  update: function () {
    this.x += viewportX
    this.y = this.y + viewportY
  },
  draw: function (ctx) {
    ctx.fillStyle = 'green'
    ctx.fillRect(
      this.x * gridSize,
      this.y * gridSize,
      gridSize - 2,
      gridSize - 2
    )
  },
  outside: function({ width, height }) {
    if (this.x * gridSize > width) this.x = 0
    if (this.y * gridSize > height) this.y = 0
  }
}

function game () {
  screen.draw(canvas, ctx)

  snake.draw(ctx)
  snake.update()
  snake.outside(canvas)
  
  food.draw(ctx)
}



function changeVpPosition(x, y) {
  viewportX = x
  viewportY = y
}
function keyPush({ keyCode }) {
  switch (keyCode) {
    case 37: // left
      changeVpPosition(-1, 0)
      break;
    case 38: // up
      changeVpPosition(0, -1)
      break;
    case 39: // right
      changeVpPosition(1, 0)
      break;
    case 40: // bottom
      changeVpPosition(0, 1)
      break;
  }
}