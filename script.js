const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const selectElement = document.querySelector('.colors');
const selectLine = document.querySelector('.lineWidth');
const canvasArea = document.getElementById('canvas-area');
const hamburgerIcon = document.getElementById('hamburger');
const menu = document.getElementById('menubar');
const deleteIcon = document.getElementById('delete');
const selectShape = document.querySelector('.shape');

// variables
let painting = false;
let color = 'black';
let lineWidth = 1;
let shape = 'line';
let x = 0;
let y = 0;
textarea = null;

const startPosition = (e) => {
  if (shape === 'line') {
    x = e.offsetX;
    y = e.offsetY;
    painting = true;
  }
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
// Draw Line
const drawLine = (ctx, x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.strokeStyle = `${color}`;
  ctx.lineWidth = `${lineWidth}`;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
};

// Change Color
const changeColor = (e) => {
  canvas.classList.remove('canvas-pen');

  // Change cursor
  if (color !== 'white') {
    canvas.classList.add('canvas-pen');
  } else {
    console.log('eraser');
  }
};

// Change Line Width
const changeLineWidth = (e) => {
  lineWidth = e.target.value;
};

const toggleMenu = () => {
  menu.classList.toggle('show');
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const drawCircle = (e) => {
  x = e.offsetX;
  y = e.offsetY;
  if (shape === 'arc') {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.stroke();
  } else if (shape === 'rectangle') {
    ctx.beginPath();
    ctx.rect(x, y, 150, 100);
    ctx.stroke();
  } else if (shape === 'square') {
    ctx.beginPath();
    ctx.rect(x, y, 100, 100);
    ctx.stroke();
  }
};

// Change Shape
const changeSelectShape = (e) => {
  shape = e.target.value;
  console.log(shape);
};

// EventListeners
canvas.addEventListener('mousedown', startPosition);
window.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('dblclick', drawCircle);

hamburgerIcon.addEventListener('click', toggleMenu);
deleteIcon.addEventListener('click', clearCanvas);

selectElement.addEventListener('change', changeColor);
selectLine.addEventListener('change', changeLineWidth);
selectShape.addEventListener('change', changeSelectShape);
