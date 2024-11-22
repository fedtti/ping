/* TABLE */
const table = document.getElementById('table');
table.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
table.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

/* PLAYERS */
const p = {
  width: table.width / 75,
  height: table.height / 5
}

const p1 = {
  x: p.width,
  y: table.height / 2 - p.height / 2,
  width: p.width,
  height: p.height,
  speed: 0
};

const p2 = {
  x: table.width - p.width * 2,
  y: table.height / 2 - p.height / 2,
  width: p.width,
  height: p.height,
  speed: 0
};

const ctx = table.getContext('2d'); // CONTEXT

/**
 * 
 */
const drawPlayers = (p1, p2) => {
  ctx.fillStyle = 'white';
  ctx.fillRect(p1.x, p1.y, p1.width, p1.height);

  ctx.fillRect(p2.x, p2.y, p2.width, p2.height);
};

/**
 * 
 */
window.onload = () => {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, table.width, table.height);
  drawPlayers(p1, p2);
};