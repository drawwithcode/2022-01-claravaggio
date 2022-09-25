// concept: personal re-interpretation of Hilma Af Klint, Altarpiece nº1-3, 1915
function preload() {
}

let step = - 30; //to create the stairs
let colorCount = 0; //to create the gradient
//instead of using frameCount, so I can create a perfect loop
let counter = 0;
let continuous = false; //to invert the loop

function setup() {
  createCanvas(800, 700);
  angleMode(DEGREES);
  strokeCap(SQUARE);
  frameRate(20);
  background("#302713");
}

function draw() {
  counter += 1;
  push();
  translate(width / 2, height / 3);
  strokeCap(ROUND);
  rotate(counter * 8);

  //choose if the color goes from red to yellow or viceversa
  if (continuous == false) {
    let myColor = lerpColor(color("red"), color("yellow"), counter/50);
    stroke(myColor);
  } else {
    let myColor = lerpColor(color("yellow"), color("red"), counter/50);
    stroke(myColor);
  }
  
  strokeWeight(4);
  line(-10, 10, 80, 70);
  line(0, 30, 100, 150);
  line(0, 0, 170, 170);
  noStroke();
  circle(0, 0, counter + 80);
  pop();

  //create the stairs in a precise amount of time
    if (counter > 30 && counter < 43) {
    step += 35;
    colorCount += 0.08;
    strokeWeight(35);
    if (continuous == false) {
      let lineColor = lerpColor(color("red"), color("yellow"), colorCount);
      stroke(lineColor);
    } else {
      let lineColor = lerpColor(color("yellow"), color("red"), colorCount);
    stroke(lineColor);
    }
    let lineX = step - 100;
    let lineY = height - step;
    let lineX2 = width - step + 100;
    line(lineX, lineY, lineX2, lineY);
  }

  //invert the loop
  if (counter == 90) {
    counter = 0;
    step = -30;
    colorCount = 0;
    continuous = !continuous;
  }
}
