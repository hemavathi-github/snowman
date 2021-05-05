const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var snowFlakes = [], box1, bg1, snowmanImage, snowman;

function preload(){
    bg1 = loadImage("snow3.jpg");
    //snowmanImage = loadImage("1-19282_image-result-for-snowman-clipart-clip-art-snowman.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;


    for(var i = 0 ; i < 100; i++){
  snowFlakes.push(new Snow(random(0, width), random(0, height)))
    }

    box1 = new Box(420, 470);
    snowman = new Box(1000, 250);

    /*snowman = createSprite(200, 200, 10, 10);
    snowman.addImage(snowmanImage);
    snowman.scale = 0.2;*/
    
}

function draw(){
    background(bg1);
    Engine.update(engine);
    
    for(i = 0 ; i < 100; i++){
        snowFlakes[i].display();
        snowFlakes[i].reposition();
            } 

    //box1.display();
    //snowman.display(); 
    //drawSprites();       
            
}







