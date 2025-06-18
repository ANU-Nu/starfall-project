
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speed = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x + this.size / 2, this.y - this.size / 2,
                          this.x + this.size * 1.5, this.y + this.size / 2,
                          this.x, this.y + this.size);
        ctx.bezierCurveTo(this.x - this.size * 1.5, this.y + this.size / 2,
                          this.x - this.size / 2, this.y - this.size / 2,
                          this.x, this.y);
        ctx.fill();
    }
}

function init() {
    hearts = [];
    for (let i = 0; i < 100; i++) {
        hearts.push(new Heart());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
