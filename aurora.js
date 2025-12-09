const canvas = document.getElementById('aurora');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;

// Aurora wave parameters
const waveCount = 3;
const waves = [];

for (let i = 0; i < waveCount; i++) {
  waves.push({
    amplitude: 100 + Math.random() * 150,
    wavelength: 200 + Math.random() * 200,
    speed: 0.002 + Math.random() * 0.003,
    phase: Math.random() * Math.PI * 2,
    color: `hsl(${180 + i*60}, 100%, 50%)`
  });
}

let time = 0;

function drawAurora() {
  ctx.clearRect(0, 0, width, height);

  waves.forEach(w => {
    ctx.beginPath();
    for (let x = 0; x <= width; x += 1) {
      const y = height/2 + Math.sin(x / w.wavelength + time * w.speed) * w.amplitude;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, height/2 - 200, 0, height);
    gradient.addColorStop(0, w.color);
    gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.fill();
  });

  time += 1;
  requestAnimationFrame(drawAurora);
}

drawAurora();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
