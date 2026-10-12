function preload() {
  // put preload code here
}

let xMax = 500
let yMax = 500
let xCane = xMax/2
let yCane = yMax*0.4

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(173, 216, 230);
  noStroke();

  push();
  //prato
  fill(130, 185, 85);
  rect(0, height * 0.8, width, height * 0.3);
  
  //erba
  fill(110, 165, 70);
  let y = yMax*0.8
  
  for (i=0; i<6; i++) {
    
    for (j = -5; j < width; j += 15) {
    // Disegna un ciuffo d'erba triangolare ogni 15 pixel
    triangle(j, y, j + 7, y - 15, j + 17, y);
    }
    
    y = y+20;
  }
  pop();
    
  push();

  //testa
  
    // testa dx
    fill(255, 255, 255);
    rectMode(CENTER);
    rect(xCane+30, yCane+10, 60, 130);
  
    // testa sx
    fill(205, 133, 50);
    rectMode(CENTER);
    rect(xCane-30, yCane+5, 60, 120);

  //occhio
  
    //occhio sx
    fill(52, 31, 24);
    rectMode(CENTER);
    circle(xCane-30, yCane, 18);
  
    //occhio dx
    fill(52, 31, 24);
    rectMode(CENTER);
    circle(xCane+30, yCane, 18);

  //orecchie
  
    //orecchio sx
    fill(52, 31, 24);
    triangle(xCane-60, yCane-55, xCane-60, yCane+65, xCane-130, yCane);
  
    //orecchio dx
    fill(52, 31, 24);
    triangle(xCane+60, yCane-55, xCane+60, yCane+65, xCane+130, yCane);

  //collo
  
    //collo chiaro
    fill(205, 133, 50)
    rectMode(CENTER);
    rect(xCane, yCane+105, 120, 70);
  
    //collo scuro
    fill(52, 31, 24)
    rectMode(CENTER);
    rect(xCane+45, yCane+105, 30, 70);
  
    fill(52, 31, 24);
    triangle(xCane+30, yCane+110, xCane+30, yCane+140, xCane-36, yCane+110);

  //muso
  
    fill(255, 255, 255)
    ellipse(xCane, yCane+70, 120, 100)
  
    fill(52, 31, 24)
    ellipse(xCane, yCane+70, 40, 40)

  //corpo

    fill(255, 255, 255)
    rectMode(CENTER);
    rect(xCane, yCane+240, 120, 200);

    fill(205, 133, 50)
    rectMode(CENTER);
    rect(xCane, yCane+255, 50, 100);

    fill(205, 133, 50);
    triangle(xCane+60, yCane+140, xCane+60, yCane+365, xCane+130, yCane+400);

    triangle(xCane-60, yCane+140, xCane-60, yCane+365, xCane-130, yCane+400);

  pop();

}
