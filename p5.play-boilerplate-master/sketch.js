var head, neck, body,eye1,eye2
var C = 0
var easing= 0.05
var Xpos = 400
function setup() {
  createCanvas(800,400);
  head = createSprite(Xpos,100,50,50)
  head.shapeColor = "red"

  neck = createSprite(Xpos,160,10,70)
  neck.shapeColor = "blue"

  body = createSprite(Xpos,240,70,100)
  body.shapeColor = "green"

  eye1 = createSprite(head.x-10,head.y-10,10,10)
  eye2 = createSprite(head.x+10,head.y-10,10,10)
  eye1.shapeColor = "black"
  eye2.shapeColor = "black"
  
}

function draw() {
  background(255,192,203);
  textSize(15)
  fill("red")
  
  text("USE LEFT CLICK TO\nSHORTEN THE LENGTH",100,50)
  
  text("USE MOUSE DRAGGED\nTO MOVE THE ROBOT",100,100)

  fill("yellow")
  ellipse(body.x,body.y+60,60,60)

  eye1.x = head.x-10
  eye2.x = head.x+10
  eye1.y = head.y-10
  eye2.y = head.y-10
  head.y = neck.y - neck.height/2 - 25
  body.y = neck.y + neck.height/2 + 35
 
  drawSprites()
 

}
function mouseDragged(){

  
  var targetX = mouseX
  var Dx = targetX-Xpos
  Xpos += Dx*easing

  head.x = Xpos
  neck.x = Xpos
  body.x = Xpos
 
}

function mouseClicked(){
  if(C==0) {
    neck.height=30
    C=1
  } else if (C==1){
    neck.height=70
    C=0
  }
}
  
 

  
  

