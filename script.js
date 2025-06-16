let correctColor = "";

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function startGame() {
  const buttons = document.querySelectorAll('.color-btn');
  const colors = [randomColor(), randomColor(), randomColor()];
  const answer = Math.floor(Math.random() * 3);
  correctColor = colors[answer];
  document.getElementById('color-code').textContent = correctColor;
  document.getElementById('message').textContent = "";
  buttons.forEach((btn, idx) => {
    btn.style.background = colors[idx];
    btn.onclick = function() {
      if (colors[idx] === correctColor) {
        document.getElementById('message').textContent = "बिल्कुल सही!";
      } else {
        document.getElementById('message').textContent = "गलत! फिर कोशिश करें।";
      }
    }
  });
}

window.onload = startGame;
