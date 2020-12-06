var maze, maze_img;

function preload() {
  maze_img = loadImage("pics/Maze1.png");
}

function setup() {
  createCanvas(600,600);
  maze = createSprite(300,300)
  maze.addImage("game1",maze_img);

  wall1 = createSprite(50,305,5,515);

  wall2 = createSprite(553,305,5,515);
}

function draw() {
  background(220);  


  drawSprites();
}