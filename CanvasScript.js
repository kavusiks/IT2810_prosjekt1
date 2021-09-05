const canvasArt = document.getElementById("abstractCanvas");
const artCtx = canvasArt.getContext("2d");
let movingEarsAniamtion = null;
let y = 150


canvasArt.addEventListener('mouseover', animateEars, false);
canvasArt.addEventListener('mouseout', stopEars, false);


function stopEars() {
  artCtx.clearRect(199, 149, 52, 50)
  artCtx.clearRect(199, y - 1, 52, 52)
  artCtx.clearRect(299, 149, 52, 50)
  artCtx.clearRect(299, y - 1, 52, 52)
  cancelAnimationFrame(movingEarsAniamtion);
  y = 150;
}
function animateEars() {
  //moving ears back to start postion, when they reach the top of picture
  if (y <= 0) {
    artCtx.clearRect(199, y - 1, 52, 52)
    artCtx.clearRect(299, y - 1, 52, 52)
    y = 150;
  }
  movingEarsAniamtion = requestAnimationFrame(animateEars);

  //clearing last drawn ears to create the moving animation
  artCtx.clearRect(199, 149, 52, 50)
  artCtx.clearRect(199, y - 1, 52, 52)
  artCtx.clearRect(299, 149, 52, 50)
  artCtx.clearRect(299, y - 1, 52, 52)
  y += -1;
  //drawing ears with the updated y-postion
  createRect(artCtx, 200, y, 50, 50, "rgb(44, 44, 44)", "pink");
  createRect(artCtx, 300, y, 50, 50, "rgb(44, 44, 44)", "pink");
}


function createRect(context, x, y, width, heigth, color) {
  context.beginPath();
  context.rect(x, y, width, heigth)
  context.closePath();
  fillColor(context, color)
}

function createTrapezoid(context, ax, ay, bx, by, cx, cy, dx, dy, color) {
  context.beginPath();
  context.moveTo(ax, ay);
  context.lineTo(bx, by);
  context.lineTo(cx, cy);
  context.lineTo(dx, dy);
  context.closePath();
  fillColor(context, color)

}
function createRoundedRect(context, diagonalFromX, diagonalFromY, diagonalToX, diagonalToY, color) {
  context.beginPath();
  context.moveTo(diagonalFromX + 10, diagonalFromY);
  context.lineTo(diagonalToX - 10, diagonalFromY);
  context.quadraticCurveTo(diagonalToX, diagonalFromY, diagonalToX, diagonalFromY + 10);
  context.lineTo(diagonalToX, diagonalToY - 10);
  context.quadraticCurveTo(diagonalToX, diagonalToY, diagonalToX - 10, diagonalToY);
  context.lineTo(diagonalFromX + 10, diagonalToY);
  context.quadraticCurveTo(diagonalFromX, diagonalToY, diagonalFromX, diagonalToY - 10);
  context.lineTo(diagonalFromX, diagonalFromY + 10);
  context.quadraticCurveTo(diagonalFromX, diagonalFromY, diagonalFromX + 10, diagonalFromY);
  context.closePath();
  fillColor(context, color)
}

function fillColor(context, mainColor) {
  context.fillStyle = mainColor;
  context.fill();
  context.stroke();
}



function drawNose(context, centerX, centerY, radius, alpha) {

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.closePath();
  fillColor(artCtx, `rgba(255, 255, 0, ${alpha})`);

}

function drawMouth(startX, startY, height, width, color) {
  artCtx.beginPath();
  artCtx.moveTo(startX, startY);
  artCtx.lineTo(startX + width, startY);
  artCtx.quadraticCurveTo(startX + width + width / 2, startY + height / 2, startY + height - 5, startY + height);
  artCtx.lineTo(startX, startY + height);
  artCtx.quadraticCurveTo(startX - width / 2, startY + height / 2, startX, startY);
  artCtx.closePath();
  fillColor(artCtx, color);
}


function init() {
  window.requestAnimationFrame(draw);
  fadeOutNose();
}

function draw() {
  createRect(artCtx, 200, 200, 150, 150, "rgb(44, 44, 44)", "pink");
  createRect(artCtx, 200, 150, 50, 50, "rgb(44, 44, 44)", "pink");
  createRect(artCtx, 300, 150, 50, 50, "rgb(44, 44, 44)", "pink");
  createTrapezoid(artCtx, 200, 350, 245, 450, 305, 450, 350, 350, "rgb(44, 44, 44)", "pink");
  createRoundedRect(artCtx, 215, 225, 250, 250, "red", "black");
  createRoundedRect(artCtx, 300, 225, 335, 250, "red", "black");
  drawMouth(240, 300, 15, 70, "red");

  window.requestAnimationFrame(draw);
}


let alpha = 1.0;
//Method to fadeout the nose to make blinking animation by repeating it
function fadeOutNose() {
  if (alpha <= 0) {
    alpha = 1;
  }
  requestAnimationFrame(fadeOutNose);
  drawNose(artCtx, 275, 275, 10, alpha);
  alpha += -0.01;

}


init();




