 var fixRect,movingRect;
 vartop1,top2,top3,top4
 
 
 
 
 function setup() {
  createCanvas(1200,700);
 fixRect=createSprite(300,200,30,30)
 movingRect=createSprite(10,50,30,30)
fixRect.shapeColor="pink" 
movingRect.shapeColor="pink"
 top1=createSprite(200,100,60,40)
 top2=createSprite(400,100,60,40)
 top3=createSprite(600,100,60,40)
 top4=createSprite(1000,100,60,40)

top3.shapeColor="green"
top4.shapeColor="yellow"

top3.velocityX=2
top4.velocityX=-5
 }




function draw() {
  background(0);  
 movingRect.x=mouseX
 movingRect.y=mouseY


bounceOff(top3,top4);

console.log(top4.x)

if(isTouching(movingRect,top1))

{
movingRect.shapeColor="blue"
top1.shapeColor="lightBlue"

fixRect.width=100
}
else
{
  top1.shapeColor="pink" 
  movingRect.shapeColor="pink"

  fixRect.width=50
}

  drawSprites();

}



function  bounceOff (a1,b1)
{
  if(a1.x-b1.x<=a1.width/2+b1.width/2 
    && b1.x-a1.x<=a1.width/2+b1.width/2
   && a1.y-b1.y<=a1.height/2+b1.height/2 
   && b1.y-a1.y<=a1.height/2+b1.height/2)

   a1.velocityX=a1.velocityX*-1
   b1.velocityX=b1.velocityX*-1

}