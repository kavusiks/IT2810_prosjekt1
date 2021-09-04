var canvasArt = document.getElementById("abstractCanvas");
var artCtx = canvasArt.getContext("2d");
let movingEarsAniamtion = null;


canvasArt.addEventListener('mouseover', animateEars, false);
canvasArt.addEventListener('mouseout', stopEars, false);

var y=150

function stopEars() {
  artCtx.clearRect(199, 149, 52,50)
artCtx.clearRect(199, y-1, 52,52)
artCtx.clearRect(299, 149, 52,50)
artCtx.clearRect(299, y-1, 52,52)
  cancelAnimationFrame(movingEarsAniamtion);
y=150;
}
function animateEars() {
  console.log("fdkjshj");
  if (y <= 0) {
    artCtx.clearRect(199, y-1, 52,52)
    artCtx.clearRect(299, y-1, 52,52)
    y=150;
} 
movingEarsAniamtion = requestAnimationFrame(animateEars);

artCtx.clearRect(199, 149, 52,50)
artCtx.clearRect(199, y-1, 52,52)
artCtx.clearRect(299, 149, 52,50)
artCtx.clearRect(299, y-1, 52,52)
y += -1;
createRect(artCtx, 200, y, 50, 50, "rgb(44, 44, 44)", "pink");

createRect(artCtx, 300, y, 50, 50, "rgb(44, 44, 44)", "pink");
}

function createRect(context, x, y, width, heigth, color, outlineColor) {
  context.beginPath();
  context.rect(x, y, width, heigth)
  context.closePath();
  fillColor(context, color)
}

function createTrapezoid(context, ax, ay, bx, by, cx, cy, dx, dy, color, outlineColor) {
  context.beginPath();
  context.moveTo(ax, ay);
  context.lineTo(bx, by);
  context.lineTo(cx, cy);
  context.lineTo(dx, dy);
  context.closePath();
  fillColor(context, color)

}
function createRoundedRect(context, diagonalFromX, diagonalFromY, diagonalToX, diagonalToY, color, outlineColor) {
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
  fillColor(context, color, outlineColor, 5)
}
function fillColor(context, mainColor) {
  context.fillStyle = mainColor;
  context.fill();
  context.stroke();
}



artCtx.beginPath();
artCtx.moveTo(240, 300);
artCtx.lineTo(310, 300);
artCtx.quadraticCurveTo(345, 307.5, 310, 315);
artCtx.lineTo(240, 315);
artCtx.quadraticCurveTo(205, 307.5, 240, 300);
artCtx.closePath();
fillColor(artCtx, "red");

function drawNose(context, centerX, centerY, radius, alpha) {

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.closePath();
  fillColor(artCtx, `rgba(255, 255, 0, ${alpha})`);

}


function hideNose(context, centerX, centerY, radius) {
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.closePath();
  fillColor(artCtx, "rgb(44,44,44)");
}
drawNose(artCtx, 275, 275, 10);

function init() {
  window.requestAnimationFrame(draw);
  fadeOut();
}

function draw() {
  //prøv å lage en loop som endrer fargen til nesa

createRect(artCtx, 200, 200, 150, 150, "rgb(44, 44, 44)", "pink");
createRect(artCtx, 200, 150, 50, 50, "rgb(44, 44, 44)", "pink");
createRect(artCtx, 300, 150, 50, 50, "rgb(44, 44, 44)", "pink");
createTrapezoid(artCtx, 200, 350, 245, 450, 305, 450, 350, 350, "rgb(44, 44, 44)", "pink");
createRoundedRect(artCtx, 215, 225, 250, 250, "red", "black");
createRoundedRect(artCtx, 300, 225, 335, 250, "red", "black");
artCtx.beginPath();
artCtx.moveTo(240, 300);
artCtx.lineTo(310, 300);
artCtx.quadraticCurveTo(345, 307.5, 310, 315);
artCtx.lineTo(240, 315);
artCtx.quadraticCurveTo(205, 307.5, 240, 300);
artCtx.closePath();
fillColor(artCtx, "red")
//drawNose(artCtx, 275, 275, 10, 1);
window.requestAnimationFrame(draw);
//fadeOut();
}

//function drawLeftEar()

var alpha = 1.0;
function fadeOut() {
    if (alpha <= 0) {
        alpha=1;
    } 
    requestAnimationFrame(fadeOut);
    drawNose(artCtx, 275, 275, 10, alpha);
    alpha += -0.01;

}


init();




