function setup() {
   canvas = createCanvas(550,550);
   canvas.center();
   background("pink");

   video = createCapture(VIDEO);
   video.hide();

   
}

function draw() {

   image(video,0,0,550,550);

   noFill("#5c1ee3");
   stroke("red");
   rect(30,30,500);

   fill("blue");
   circle(30,520,40);
   
   fill("blue");
   circle(30,40,40);
   
   fill("blue");
   circle(530,40,40);
   
   fill("blue");
   circle(530,520,40);

}