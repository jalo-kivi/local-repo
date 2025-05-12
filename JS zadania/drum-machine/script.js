const drumPads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

drumPads.forEach(pad => {
  const audio = pad.querySelector('audio');

  const clipName = pad.getAttribute('name');

  pad.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
    display.innerText = clipName;
  });
});

document.addEventListener('keydown', e => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);
  
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    const pad = audio.parentElement;
    const clipName = pad.getAttribute('name') || key;
    display.innerText = clipName;
  }
});
