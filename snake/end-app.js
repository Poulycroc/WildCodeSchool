// initing variables
var canvas = ctx = null
// initing our viewport position
var xv = yv = 0
// defining a grid size 
var gridSize = tc = 20

// launch function when page is ready
window.onload = function () {
  // get canvas element
  canvas = document.getElementById('canvas')
  // define context
  ctx = canvas.getContext('2d')
  // listening the keybord action
  document.addEventListener('keydown', keyPush)
  // looping on game function   
  setInterval(game, 1000 / 15)
}

var screen = {
  // drwing our screen game 
  draw: function ({ width, height }, ctx) {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, width, height)
    ctx.closePath()
  }
}
var food = {
  // base position of food
  x: 15,
  y: 15,
  // spawn new food element randomly 
  spawn: function () {
    this.x = Math.floor(Math.random() * tc)
    this.y = Math.floor(Math.random() * tc)
  },
  // define color and poition
  draw: function (ctx) {
    ctx.fillStyle = 'red'
    ctx.fillRect(
      this.x * gridSize, 
      this.y * gridSize, 
      gridSize - 2, 
      gridSize - 2
    )
    ctx.closePath()
  }
}
var snake = {
  // init position of snakee from viewport 
  x: xv,
  y: yv,
  // init array of first from snake position
  trail: [{ x: this.x, y: this.y }],
  tail: 5,
  color: 'green',
  draw: function (ctx) {
    ctx.fillStyle = this.color
    
    for (var i = 0; i < this.trail.length; i++) {
      // looping in trail array for drawing the snake

      // save trail array position in variable
      var t = this.trail[i]

      // draw tail
      ctx.fillRect(
        t.x * gridSize,
        t.y * gridSize,
        gridSize - 2,
        gridSize - 2
      )

      // watch if snake eat it selt
      this.eatItSelf(t)
    }
  },
  update: function () {
    // adding tail on snake if less than 5
    this.trail.push({
      x: this.x,
      y: this.y
    })

    this.x += xv
    this.y += yv

    while (this.trail.length > this.tail) {
      this.trail.shift()
    }
  },
  outCanvas: function () {
    // check if snake go outside of the screen 
    if (this.x < 0) this.x = tc - 1 // if out on right 
    if (this.x > (tc - 1)) this.x = 0 // if out on left 
    
    if (this.y < 0) this.y = tc - 1
    if (this.y > (tc - 1)) this.y = 0
  },
  eat: function ({ x, y }) {
    // if snake is on the same position of food 
    if (this.x == x && this.y == y) {
      this.tail++ // adding one tail to snake
      food.spawn() // add new food on screen
    }
  },
  eatItSelf: function ({ x, y }) {
    // if snake is on same poition of himself
    if (x == this.x && y == this.y) this.tail = 5
  }
}


function game() {
  screen.draw(canvas, ctx)

  food.draw(ctx)

  snake.draw(ctx)
  snake.update()
  snake.outCanvas()
  snake.eat(food)
}


function vpPos(x, y) {
  xv = x
  yv = y
}
function keyPush({ keyCode }) {
  switch (keyCode) {
    case 37:
      vpPos(-1, 0)
      break
    case 38:
      vpPos(0, -1)
      break
    case 39:
      vpPos(1, 0)
      break
    case 40:
      vpPos(0, 1)
      break
  }
}