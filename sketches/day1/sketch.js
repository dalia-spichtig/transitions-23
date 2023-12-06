let shapeId = 0;
let shapeType = 'circle'; // Initial shape type
let shapeSizeX = 300; // Initial size of the shape
let shapeSizeY = 300; // Initial size of the shape
let targetSize = 300; // Target size when not expanding
let expanding = false; // Flag to track if the shape is expanding
let borderRadius = 9999;



window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

window.draw = function () {
  background(255);


  let centerX = width / 2; // Calculate the x-coordinate of the center
  let centerY = height / 2; // Calculate the y-coordinate of the center

  let rectLeft = centerX - 150;
  let rectRight = centerX + 150;
  let rectTop = centerY - 150;
  let rectBottom = centerY + 150;

  if (
    mouseX > rectLeft &&
    mouseX < rectRight &&
    mouseY > rectTop &&
    mouseY < rectBottom
  ) 
  if (mouseIsPressed /*&& shapeType === 'circle'*/) {
    // Gradually increase the size to 500 when expanding is true for circle
    shapeSizeX += 5//(windowWidth - shapeSize) * 0.1;
    shapeSizeY += 5//(windowWidth - shapeSize) * 0.1;
  } else {
    // For rectangle or when not expanding, keep the size constant at 100
   // shapeSize = 300;
   shapeSizeX = lerp(shapeSizeX,300,0.2);
   shapeSizeY = lerp(shapeSizeY,300,0.2);
  }

  shapeSizeX = max(shapeSizeX,300)
  shapeSizeY = max(shapeSizeY,300)

  // Draw a shape at the center
  fill(0); // Set fill color to black
  
  
  //if (shapeType === 'circle') {
    rectMode(CENTER);
    const realShapeSizeX = min(shapeSizeX,width);
    const realShapeSizeY = min(shapeSizeY,height);
    if(borderRadius > 0)
    {
      const xPressure = shapeSizeX-realShapeSizeX
      const yPressure = shapeSizeY-realShapeSizeY
      borderRadius = (max(shapeSizeX,shapeSizeY)-yPressure-xPressure ) /2;
      borderRadius = max(0,borderRadius)
    }
    else{
      shapeSizeX = min(shapeSizeX,width)
      shapeSizeY = min(shapeSizeY,height)
    }
    rect(centerX, centerY, realShapeSizeX, realShapeSizeY, borderRadius);


   // if (shapeSize >= windowWidth-1) {
      // If the size becomes 500 or more, switch to drawing a rectangle
      //shapeType = 'rectangle';
      //shapeSize = 300; // Reset size for the rectangle
   // }
 // }// else if (shapeType === 'rectangle') {
   // rectMode(CENTER);
   // rect(centerX, centerY, shapeSize, shapeSize);

  //}
  
};

window.mousePressed = function () {
 // expanding = true; // Set expanding flag to true when mouse is pressed
};

window.mouseReleased = function () {
 // expanding = false; // Set expanding flag to false when mouse is released
//  targetSize = 300; // Set the target size to 100 upon releasing the mouse
//  shapeType = 'circle'; // Reset shape type to circle
};
