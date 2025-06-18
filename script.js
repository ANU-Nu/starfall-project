const emojiContainer = document.getElementById('emoji-container');
const emojis = ['❤️', '💖', '💕', '💘', '💝'];  // หัวใจหลายแบบ

function createEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // กำหนดตำแหน่งสุ่มจากซ้ายไปขวา
  emoji.style.left = Math.random() * window.innerWidth + 'px';

  // กำหนดขนาดและความเร็วสุ่ม
  const size = 20 + Math.random() * 30;
  emoji.style.fontSize = size + 'px';

  const duration = 4000 + Math.random() * 3000;
  emoji.style.animationDuration = duration + 'ms';

  emojiContainer.appendChild(emoji);

  // ลบ emoji เมื่อแอนิเมชันจบ
  emoji.addEventListener('animationend', () => {
    emoji.remove();
  });
}

// สร้างหัวใจตกลงมาต่อเนื่องทุก 300 มิลลิวินาที
setInterval(createEmoji, 300);
