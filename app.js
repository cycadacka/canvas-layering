import CanvasLayering from './lib/canvas-layering.js';

const viewportElement = document.getElementById('viewport');
const viewport = CanvasLayering.create(viewportElement);

{
  const triangles = document.createElement('canvas');
  viewport.add(triangles);

  const ctx = triangles.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(20, 140);
  ctx.lineTo(120, 10);
  ctx.lineTo(220, 140);
  ctx.closePath();
  ctx.fill();
}

{
  const circles = document.createElement('canvas');
  viewport.add(circles);

  const ctx = circles.getContext('2d');
  ctx.save();
  ctx.arc(120, 100, 20, 0, Math.PI * 2);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.restore();
}

{
  const squares = document.createElement('canvas');
  viewport.add(squares);

  const ctx = squares.getContext('2d');
  ctx.save();
  ctx.fillStyle = 'red';
  ctx.fillRect(120, 10, 50, 100);
  ctx.restore();
}
