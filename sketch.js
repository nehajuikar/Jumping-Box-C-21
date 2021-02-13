var canvas;
var music;
var box , surface1 , surface2 , surface3 , surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = new surface1(200,100,50,50);
surface2 = new surface2(300,200,50,50);
surface3 = new surface3(400,100,50,50);
surface = new surface4(500,200,50,50);

    //create box sprite and give velocity
box = new box(100,100,10,10);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box

    if(box.is.Touching(surface1)){
        if(box.is.Touching(surface2)){
            if(box.is.Touching(surface3)){
                if(box.is.Touching(surface4)){
                    
                }
