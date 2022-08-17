const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

let keyPressCounter = 0;

input.addEventListener('keydown', event => {
  keyPressCounter += 1;
  if (keyPressCounter === 1) output.textContent = '';
  if (event.key !== 'Shift') {
    output.textContent += event.key;
  }
  console.log(event.key);
});
