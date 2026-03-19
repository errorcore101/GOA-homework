const ball = document.getElementById("ball");

let position = 0;
let speed = 2; 

function animate() {
    position += speed
    
    
    const screenWidth = window.innerWidth;
    const ballWidth = ball.offsetWidth;


    if (position > screenWidth) {
        position = -ballWidth;
    }

    ball.style.left = position + "px";

    requestAnimationFrame(animate);
}

animate();