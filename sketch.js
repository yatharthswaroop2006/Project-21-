var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edge1,edge2,edge3,edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
    surface1=createSprite(50,390,80,10);
    surface1.shapeColor="red";
    surface2=createSprite(150,390,80,10);
    surface2.shapeColor="blue";
    surface3=createSprite(250,390,80,10);
    surface3.shapeColor="yellow";
    surface4=createSprite(350,390,80,10);
    surface4.shapeColor="green";
edge1=createSprite(5,2,800,5);
edge1.shapeColor="black";
edge2=createSprite(5,398,800,5);
edge2.shapeColor="black";
edge3=createSprite(2,5,5,800);
edge3.shapeColor="black";
edge4=createSprite(398,5,5,800);
edge4.shapeColor="black";



    //create box sprite and give velocity
    box=createSprite(100,50,20,20);
    box.shapeColor="white";
    box.velocityY=-3;
    box.velocityX=-3;
    

}

function draw() {
    background("orange");
    
    
    

    //add condition to check if box touching surface and make it box
    if(edge2.isTouching(box) && box.bounceOff(edge2)){
 }
 if(edge1.isTouching(box) && box.bounceOff(edge1)){
}
if(edge3.isTouching(box) && box.bounceOff(edge3)){
}
if(edge4.isTouching(box) && box.bounceOff(edge4)){
}

if(surface1.isTouching(box) && box.bounceOff(surface1)){

    box.shapeColor="red";
    music.play();
}
if(surface2.isTouching(box) && box.collided(surface2)){
    box.shapeColor="blue";
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="yellow";
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="green";
}
    drawSprites();
}
