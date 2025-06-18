const emojis = ['💖', '❤️', '💕', '💘', '😍', '😘', '💓'];
const emojiContainer = document.body;

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.animationDuration = (Math.random() * 3 + 4) + 's';
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emojiContainer.appendChild(emoji);

    setTimeout(() => emoji.remove(), 7000);
}

setInterval(createEmoji, 150);
