song1 = "";
song2 = "";
leftWristx = "";
leftWristy = "";
rightWristx = 0;
rightWristy = 0;
scoreleftWrist = 0;
scorerightWrist = 0;

function preload(){
    song1 = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3");
}

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose" , gotPoses)
}

function draw(){
    image(video , 0 , 0 , 600 , 500);
    song1_status = song1.isPlaying();
    console.log(song1_status);
    fill("#ff3300");
    stroke("#00ffdd");
    
    if(scoreleftWrist > 0.2){
        circle(leftWristx , leftWristy , 25);
        song2.stop();
        if(song1_status == false){
            song1.play();
            document.getElementById("song_name").innerHTML = "Song name - High hopes";
        }
    }

    song2_status = song2.isPlaying()
    console.log(song2_status);
    if(scorerightWrist > 0.2){
        circle(rightWristx , rightWristy , 25);
        song1.stop();
        if(song2_status == false){
            song2.play();
            document.getElementById("song_name").innerHTML = "Song name - Believer";
        }
    }

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

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist = " + scoreleftWrist);

        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log("scorerightWrist = " + scorerightWrist);
    }
}