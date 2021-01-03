const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const selectElement = document.querySelector('.colors');
const selectLine = document.querySelector('.lineWidth');

// variables
let painting = false;
let color = 'yellow';
let lineWidth = 1;
let x = 0;
let y = 0;

const startPosition = (e) => {
  x = e.offsetX;
  y = e.offsetY;
  painting = true;
};

const endPosition = (e) => {
  if (painting === true) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    painting = false;
  }
};

const draw = (e) => {
  if (painting === true) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
};

const drawLine = (ctx, x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.strokeStyle = `${color}`;
  ctx.lineWidth = `${lineWidth}`;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
};

const changeColor = (e) => {
  color = e.target.value;
};
const changeLineWidth = (e) => {
  lineWidth = e.target.value;
  console.log(lineWidth);
};

// EventListeners
canvas.addEventListener('mousedown', startPosition);
window.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

selectElement.addEventListener('change', changeColor);
selectLine.addEventListener('change', changeLineWidth);
