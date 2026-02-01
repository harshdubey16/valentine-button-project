// Typing Effect
const message = "✨ Tap anywhere to unlock the magic ✨";
const textElement = document.getElementById("typingText");
let index = 0;

function typeText() {
  if (index < message.length) {
    textElement.textContent += message.charAt(index);
    index++;
    setTimeout(typeText, 70);
  }
}

typeText();

// Confetti on click
document.addEventListener("click", () => {

  for (let i = 0; i < 30; i++) {
    createHeart();
  }

});

function createHeart() {

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️💦❤🍆👅💋🤤❤️💦❤🍆👅💋🤤";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = (Math.random() * 20 + 20) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}