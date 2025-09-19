document.getElementById("cardClosed").addEventListener("click", function() {
  this.style.transform = "scale(0.5)";
  this.style.opacity = "0";
  const cardOpen = document.getElementById("cardOpen");
  cardOpen.style.opacity = "1";
  cardOpen.style.transform = "scale(1)";
});

document.getElementById("playMusic").addEventListener("click", function() {
  let music = document.getElementById("music");
  if (music.paused) {
    music.play();
    this.innerText = "Pause Music ⏸️";
  } else {
    music.pause();
    this.innerText = "Play Music 🎶";
  }
});