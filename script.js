window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = 600;
  canvas.width = 600;
  // variables
  let painting = false;

  const x = canvas.width;
  const y = canvas.height;

  const startPosition = (e) => {
    painting = true;
    draw(e);
  };
  const endPosition = () => {
    painting = false;
    ctx.beginPath();
  };

  const draw = (e) => {
    if (!painting) return;

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineTo(e.offSetX, e.offSetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offSetX, e.offSetY);
  };

  // Event Listeners
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', endPosition);
  canvas.addEventListener('mousemove', draw);
});
