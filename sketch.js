function setup() {
  createCanvas(500,500);
  background(40)
  angleMode(DEGREES)
  
  frameRate(12)
}

function draw() {
  translate(width/2,height/2)
  rotate(frameCount*4)
  noFill()
  
  
  
  stroke(lerpColor(color('#F48579'), color('#8CC69B'), frameCount/90));
  line(width/8,0,width/4*cos(frameCount*4),height/8*sin(frameCount*8))
  
  if  (frameCount == 90){
  noLoop()
  }
	
}