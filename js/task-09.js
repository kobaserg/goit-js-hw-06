function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const colorName = document.querySelector('span.color');

const buttonColor = document.querySelector('button.change-color');

buttonColor.addEventListener('click', event => {
  let currentColorBody = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColorBody;
  colorName.textContent = currentColorBody;
  colorName.style.fontSize = '36px';
  colorName.style.color = 'white';
});
