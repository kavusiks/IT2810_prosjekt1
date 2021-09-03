var canvasArt = document.getElementById("abstraktCanvas");
var artCtx = canvasArt.getContext("2d");


function createRect(context, x, y, width, heigth, color, outlineColor) {
  context.beginPath();
  context.rect(x, y, width, width)
  context.closePath();
  fillColor(context, color, outlineColor, 5)
}

function createTrapezoid(context, ax, ay, bx, by, cx, cy, dx, dy, color, outlineColor) {
  context.beginPath();
  context.moveTo(ax, ay);
  context.lineTo(bx, by);
  context.lineTo(cx, cy);
  context.lineTo(dx, dy);
  context.closePath();
  fillColor(context, color, outlineColor, 5)

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
function fillColor(context, mainColor, outlineColor, lineWidth) {
  context.fillStyle = mainColor;
  context.lineWidth = lineWidth;
  context.strokeStyle = outlineColor;
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
fillColor(artCtx, "red", "black", 5)

function drawNose(context, centerX, centerY, radius, alpha) {

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.closePath();
  fillColor(artCtx, `rgba(255, 255, 0, ${alpha})`, `rgba(0, 255, 0, ${alpha})`, 5);
  //fillColor(artCtx, `rgba(255, 255, 0)`, "green", 5);
}


function hideNose(context, centerX, centerY, radius) {
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  context.closePath();
  fillColor(artCtx, "rgb(44,44,44)", "rgb(44,44,44)", 5);
}
drawNose(artCtx, 275, 275, 10);

function init() {
  window.requestAnimationFrame(draw);
  fadeOut();
}

function draw() {
  //prøv å lage en loop som endrer fargen til nesa

createRect(artCtx, 200, 200, 150, 150, "rgb(44, 44, 44)", "pink");
createRect(artCtx, 350, 150, 50, 50, "rgb(44, 44, 44)", "pink");
createRect(artCtx, 150, 150, 50, 50, "rgb(44, 44, 44)", "pink");
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
fillColor(artCtx, "red", "black", 5)
//drawNose(artCtx, 275, 275, 10, 1);
window.requestAnimationFrame(draw);
fadeout();
}

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




