const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 100; i++) {
    hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 2,
        speed: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => {
        ctx.beginPath();
        ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
        ctx.fillStyle = heart.color;
        ctx.fill();
    });
    move();
}

function move() {
    hearts.forEach(heart => {
        heart.y += heart.speed;
        if (heart.y > canvas.height) {
            heart.y = 0;
            heart.x = Math.random() * canvas.width;
        }
    });
}

function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();
