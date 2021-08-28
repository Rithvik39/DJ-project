song1 = "";
song2 = "";




function preload(){
    song1 = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3");
}

function setup(){
    canvas = createCanvas(800 , 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0 , 0 , 800 , 600);
}

function play1(){
    song1.play();
}

function play2(){
    song2.play();
}