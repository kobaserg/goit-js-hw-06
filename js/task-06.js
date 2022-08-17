const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', inputBlur);

function inputBlur(symbol) {
  const input = symbol.currentTarget;
  const inputLength = Number(input.dataset.length);
  if (input.value.length === inputLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
