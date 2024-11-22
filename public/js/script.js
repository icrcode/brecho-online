document.addEventListener('DOMContentLoaded', () => {
    const background = document.createElement('div');
    background.id = 'background';
    document.body.appendChild(background);
  
    for (let i = 0; i < 100; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      background.appendChild(bubble);
    }
  
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;
    });
  });