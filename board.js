var snake;

function setup() {
  createCanvas(800, 800);
  frameRate(10);
  snake = new Snake(width/2, height/2, 20);
}

function draw() {
  background(80);
  snake.update();
  snake.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direction(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.direction(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.direction(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.direction(-1, 0);
  }
}

function mousePressed() {
  snake.eat();
}

function Snake(x,y,size) {
  this.size = size;
  this.pos = createVector(x, y);
  this.dir = createVector(1,0);
  this.segments = [];
  this.segments.push(this.pos);


  this.show = function(){
    fill(255);
    for(var i = 0; i < this.segments.length; i++){
      rect(this.segments[i].x, this.segments[i].y, size, size);
    }
    rect(this.pos.x, this.pos.y, size, size);

  }


  this.direction = function(x, y){
  	this.dir.x = x;
    this.dir.y = y;
  }

  this.update = function(){
    for(var i = this.segments.length - 1; i > 0; i--){
      if(this.segments.length > 1){
        this.segments[i].x = this.segments[i-1].x;
        this.segments[i].y = this.segments[i-1].y;
      }
    }

    this.segments[0].x += this.dir.x * size;
    this.segments[0].y += this.dir.y * size;
  }

  this.eat = function(){
    this.segments.push(createVector(this.pos.x, this.pos.y));
  }
}