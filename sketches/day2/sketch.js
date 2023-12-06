let centerX;
let centerY;
const startSize = 300;
const endSize = 10;
let clickSize;
let clickPositionX;
let clickPositionY;
let rectHeight = startSize; // Initial height of the rectangle
let rectWidth = startSize;
let targetHeight = endSize; // Target height for the rectangle
let targetWidth = endSize;
let easing = 0.05; // Easing factor for smooth transition
const startWeight = 0;
let targetWeight = 20;
let rectWeight = 0;

let changeHeight = false; // Flag to indicate if height change is in progress
let changeWidth = false;
let changeWeight = false;
let currentSize = startSize;
let isDragging = false;

window.setup = function () {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  centerX = width / 2;
  centerY = height / 2;
};

window.windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

window.draw = function () {
  centerX = width / 2;
  centerY = height / 2;

  if (currentSize > endSize)
    currentSize += deltaTime / 1000 * 100

  if (isDragging) {

    const distAtClick = dist(centerX, centerY, clickPositionX, clickPositionY)
    const distNow = dist(centerX, centerY, mouseX, mouseY)
    const distOffset = distNow - distAtClick;

    currentSize = clickSize + distOffset;
  }
  currentSize = constrain(currentSize, endSize, startSize)
  background(255);
  rectMode(CENTER);
  fill(0);
  // rect(centerX, centerY, 300, rectHeight, rectWeight);
  // rect(centerX, centerY, rectWidth, 300, rectWeight);
  const currentWeight = map(currentSize, startSize, endSize, startWeight, targetWeight, true);//;
  rect(centerX, centerY, startSize, currentSize, currentWeight);
  rect(centerX, centerY, currentSize, startSize, currentWeight);

  if (changeHeight) {
    updateRectHeight();
  }
  if (changeWidth) {
    updateRectWidth();
  }
  if (changeWeight) {
    updateRectWeight();
  }


}




window.mousePressed = function () {
  changeHeight = true; // Set the flag to start changing height
  changeWidth = true;
  changeWeight = true;
  if (mouseX > centerX - startSize / 2 &&
    mouseX < centerX + startSize / 2 &&
    mouseY > centerY - startSize / 2 &&
    mouseY < centerY + startSize / 2) {

  }
  isDragging = true;
  clickPositionX = mouseX;
  clickPositionY = mouseY;
  clickSize = currentSize;
};

window.mouseReleased = function () {

  isDragging = false;
};


window.updateRectHeight = function () {
  let diff = targetHeight - rectHeight;
  rectHeight += diff * easing; // Smoothly transition towards the target height

  if (abs(diff) < 0.1) {
    rectHeight = targetHeight; // Ensure the target height is reached
    changeHeight = false; // Stop height change once target is reached
  }
}

window.updateRectWidth = function () {
  let diff = targetWidth - rectWidth;
  rectWidth += diff * easing; // Smoothly transition towards the target height

  if (abs(diff) < 0.1) {
    rectWidth = targetWidth; // Ensure the target height is reached
    changeWidth = false; // Stop height change once target is reached
  }
}

window.updateRectWeight = function () {
  let diff = targetWeight - rectWeight;
  rectWeight += diff * easing; // Smoothly transition towards the target height

  if (abs(diff) < 0.1) {
    rectWeight = targetWeight; // Ensure the target height is reached
    changeWeight = false; // Stop height change once target is reached
  }
}


