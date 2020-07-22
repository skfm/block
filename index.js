"use strict";

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

canvas.setAttribute('style', 'display: block; margin: auto; background-color: #ddd');

document.body.appendChild(canvas);

const ball = {}

const paddle = {
  x: null,
  y: null,
  width: 100,
  height: 15,
  speed: 0,

  update: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fill();

    this.x += this.speed;
  }
}

const block = {}

const level = []

const init = () => {
  paddle.x = canvas.width / 2 - paddle.width / 2;
  paddle.y = canvas.height - paddle.height;
}
const collide = () => {}

const loop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  paddle.update();

  window.requestAnimationFrame(loop);
}

init();
loop();

document.addEventListener('keydown', e => {
  if(e.key === 'ArrowLeft') paddle.speed = -6;
  if(e.key === 'ArrowRight') paddle.speed = 6;
});

document.addEventListener('keyup', () => paddle.speed = 0);
