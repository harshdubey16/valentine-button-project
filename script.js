const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");

document.addEventListener("mousemove", (e) => {

  const btnRect = noBtn.getBoundingClientRect();
  const yesBtn = document.getElementById("yesBtn").getBoundingClientRect();

  const distance = Math.hypot(
    e.clientX - (btnRect.left + btnRect.width / 2),
    e.clientY - (btnRect.top + btnRect.height / 2)
  );

  // If cursor comes close, move fast
  if (distance < 130) {
    moveNearCenter(yesBtn);
  }

});

function moveNearCenter(yesRect) {

  const padding = 20;

  const zoneWidth = container.clientWidth;
  const zoneHeight = container.clientHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = zoneWidth - btnWidth - padding;
  const maxY = zoneHeight - btnHeight - padding;

  // Random near YES area
  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function goYes() {
  window.location.href = "yes.html";
}
