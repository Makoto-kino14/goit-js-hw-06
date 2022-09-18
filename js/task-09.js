function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyBackground = document.querySelector('body');
const changeColor  = document.querySelector('.change-color')
const colorAnnouncer = document.querySelector('.color');

changeColor.addEventListener("click", changeBgColorRandom);

function changeBgColorRandom() {
  bodyBackground.style.backgroundColor = `${getRandomHexColor()}`;
  colorAnnouncer.textContent = getRandomHexColor();
}