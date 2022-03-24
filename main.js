function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
  }
video = "";

function preload(){
  video = createVideo('video.mp4');
  video.hide();
}

function draw(){
  image(video,0,0,480,380);
  if(Status != ""){
    objectDetector.detect(video,gotresults);
    for ( i = 0; i< Objects.length; i++){
document.getElementById('status').innerHTML = "Status: object detected";
document.getElementById('number_of_objects').innerHTML = "Number of objects: "+ Objects.length;
fill("#FF0000");
percent = floor(Objects[i].confidence*100);
text(Objects[i].label+" "+percent+"%", Objects[i].x +15,Objects[i].y+15);
noFill();
stroke("#FF0000")
rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height);
    }
      
    }
  }

function gotresults(error,results){
  if (error){
    console.log(error);
  }
  console.log(results);
  objects = results

}

function start(){
  objectDetector = ml5.objectDetector('cocossd',modelloaded);
  document.getElementById('status').innerHTML = "status detecting objects";
}

Status = "";
Objects = [];

function modelloaded(){
  Status = true;
  console.log("modelloaded");
  video.loop();
  video.speed(1);
  video.volume(0);
}

