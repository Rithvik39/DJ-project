song1 = "";
song2 = "";
leftWristx = "";
leftWristy = "";
rightWristx = 0;
rightWristy = 0;

function preload(){
    song1 = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3");
}

function setup(){
    canvas = createCanvas(800 , 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose" , gotPoses)
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

function modelLoaded(){
    console.log("Model is loaded !!!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftwristx = "+ leftWristx + " leftWristy = " + leftWristy);

        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("rightwristx = "+ rightWristx + " rightWristy = " + rightWristy);
    }
}