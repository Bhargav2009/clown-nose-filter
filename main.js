nosex=0
nosey=0
function preload()
{}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
  image(video, 0, 0, 640, 480);
  fill("red")
  circle(nosex, nosey, 30)
}

function take_snapshot()
{
    save('MyClownPicture.png');
}

function modelLoaded()
{
  console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    nosex = results[0].pose.nose.x+75
    nosey = results[0].pose.nose.y+150
    
  }
}