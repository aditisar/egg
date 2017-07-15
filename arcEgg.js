function arcEgg(){
 
  this.eggWidth = randInt(30, width/2);
  this.eggHeight = randInt(eggWidth*1.3, eggWidth*1.6);
  this.yolkRadius = randInt(eggWidth*.4, eggWidth*.5);
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
  
  this.display() = function() { 
    //egg
    noStroke();
    fill(eggWhiteColor);
    //i find my eggs look best with a semicircle base
    arc(0, 0, eggWidth, eggWidth, -PI, PI);
    arc(0, 0, eggWidth, eggHeight, 0, PI);
    //rectMode(CENTER); // show bounding boxes
    //rect(0, 0, eggWidth, eggHeight);
    
    //yolk
    fill(yolkColor);
    noStroke();
    ellipse(0, 0, yolkRadius, yolkRadius);
  }
}


function randInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
