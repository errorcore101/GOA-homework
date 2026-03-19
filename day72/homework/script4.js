const ball = document.getElementById("ball");

let position = 0;
let direction = 1;

function animate() {
position += direction * 2;

if (position > 300 || position < 0) {
direction *= -1;
}

ball.style.top = position + "px";

requestAnimationFrame(animate);
}

animate();