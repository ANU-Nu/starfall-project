const emojiContainer = document.getElementById('emojiContainer');
const emojis = ['💖','❤️','💕','💘'];
const screenWidth = window.innerWidth;

function createEmoji() {
  const e = document.createElement('div');
  e.classList.add('emoji');
  e.style.left = Math.random() * screenWidth + 'px';
  e.style.animationDuration = (Math.random() * 3 + 3) + 's';
  e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emojiContainer.appendChild(e);

  setTimeout(() => e.remove(), 7000);
}

setInterval(createEmoji, 100);
