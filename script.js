/* VARIABLES */
let eyeWidth = 20;
let eyeHeight = 20;

let pupilWidth = 11;
let pupilHeight = 10;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400, 400); 

  //sets the background color
  background(100, 149, 237); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  strokeWeight(2);



  
  //face
  fill("#fdf0ac");
  ellipse(width/2, height/1.69, 225, 175);


  
  //ears
  fill(253, 240, 172)
  arc(170, 160, 30, 170, 180, 360)
  arc(230, 160, 30, 170, 180, 360)

  


  //eyes
  if(mouseIsPressed == true) {
    //eyes closed
    fill(0);
    ellipse(170, 240, eyeWidth, eyeHeight/8);
    ellipse(230, 240, eyeWidth, eyeHeight/8);
  } else {
    //eyes open
    fill("#442e19");
    ellipse(170, 240, eyeWidth, eyeHeight);
    ellipse(230, 240, eyeWidth, eyeHeight);

    //pupils
    fill(255, 255, 255);
    ellipse(170, 237, pupilWidth, pupilHeight);
    ellipse(230, 237, pupilWidth, pupilHeight);
    }

  //mouth
  noFill()
  arc(192, 270, 15, 15, 0, 180);
  arc(207, 270, 15, 15, 0, 180);

  // earwax
  fill(247, 201, 220)
  arc(170, 160, 15, 150, 180, 360)
  arc(230, 160, 15, 150, 180, 360)

  //blush
  fill(247, 201, 220)
  ellipse(150, 270, 40, 30)
  ellipse(250, 270, 40, 30)

  //eyebrows
  noFill()
  arc(170, 240, 70, 80, 200, 270)
  arc(230, 240, 70, 80, 270, 340)
  
  //chin
  noFill()
  arc(200, 285, 10, 10, 90,180)

  //text
  fill(0,0,0);
  textSize(12);
  text('King of Gluttony\n but he blinks', 10, 10);

//directions for mouse press
  textSize(12);
  text('Click to see me blink.', 260, 390);
}