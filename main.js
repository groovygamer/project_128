song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw()
{
    image(video,0,0,600,500);
}

function modelLoaded()
{
    console.log("pse net is starting");
    
}

function gotPoses(results)
{
    if(results.lenght>0)
    {
        console.log(results);

    }
}