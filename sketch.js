function arcEgg(){
 
  this.eggWidth = randInt(30, width/2);
  this.eggHeight = randInt(this.eggWidth*1.3, this.eggWidth*1.6);
  this.yolkRadius = randInt(this.eggWidth*.4, this.eggWidth*.5);
  this.eggWhiteColor = color(randInt(0,360), 0, 99);
  this.yolkColor = color(randInt(45,60), randInt(80,100), randInt(90,100));
  
  // arcEgg() {
  //    //colorMode(HSB, 360, 100, 100);
  //    eggWidth = randInt(30, width/2); 
  //    eggHeight = randInt(eggWidth*1.3, eggWidth*1.6);
  //    yolkRadius = randInt(eggWidth*.4, eggWidth*.5);
  //    eggWhiteColor = color(randInt(0,360), 0, 99);
  //    yolkColor = color(randInt(45,60), randInt(80,100), randInt(90,100));
  // }
  
  this.display = function(){ 
    //egg
    noStroke();
    fill(this.eggWhiteColor);
    //i find my eggs look best with a semicircle base
    arc(0, 0, this.eggWidth, this.eggWidth, TWO_PI - QUARTER_PI, PI+QUARTER_PI); //so that line doesn't show up
    arc(0, 0, this.eggWidth, this.eggHeight, PI, 0);
    //rectMode(CENTER); // show bounding boxes  
    //rect(0, 0, eggWidth, eggHeight);
    
    //yolk
    fill(this.yolkColor);
    noStroke();
    ellipse(0, 0, this.yolkRadius, this.yolkRadius);
  }
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);


  var isActuallyAvocado = Math.random() < .03;
  smooth();
  background(randInt(45,60), randInt(80,100), randInt(90,100));

  myEgg = new arcEgg();
  if (isActuallyAvocado) {
    background(randInt(105,140), randInt(30,50), randInt(80,100));
    myEgg.eggWhiteColor = color(randInt(105,140), randInt(60,75), randInt(60,75));
    myEgg.yolkColor = color(randInt(23,33), randInt(70,80), randInt(55,65));
  }

  //ROTATE r
  translate(width/2, height/2); //
  rotate(radians(random(0, 360)));

  myEgg.display();
  saveCanvas(['egg', 'png']);
  //background(randInt(45,60), randInt(80,100), randInt(90,100));
  //frameRate(2);
  //save("egg.png");
  //exit();
}

function draw() {
  //clear();
  //   var isActuallyAvocado = Math.random() < .03;
  // smooth();
  // background(randInt(45,60), randInt(80,100), randInt(90,100));

  // myEgg = new arcEgg();
  // if (isActuallyAvocado) {
  //   background(randInt(105,140), randInt(30,50), randInt(80,100));
  //   myEgg.eggWhiteColor = color(randInt(105,140), randInt(60,75), randInt(60,75));
  //   myEgg.yolkColor = color(randInt(23,33), randInt(70,80), randInt(55,65));
  // }

  // //ROTATE r
  // translate(width/2, height/2); //
  // rotate(radians(random(0, 360)));

  // myEgg.display();
}

function randInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

