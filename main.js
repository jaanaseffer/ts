let canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(canvas);
let c = canvas.getContext("2d");
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = 10;
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    c.stroke();
    c.fillStyle = "red";
    c.fill();
  };
  this.update = function() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}
let circleArray = [];
for (let i = 0; i < 30; i++) {
  let x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius);
  let y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius);
  let dx = (Math.random() - 0.5) * 10;
  let dy = (Math.random() - 0.5) * 10;
  var radius = 50;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}
console.log(circleArray);
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();