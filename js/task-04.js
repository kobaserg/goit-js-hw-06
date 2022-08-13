let counterValue = 0;
const changeCounter = document.querySelector('#value');

const counter = document.querySelector('#counter');
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
buttonDec.addEventListener('click', () => {
    counterValue = counterValue - 1;
    changeCounter.textContent = counterValue;
})
buttonInc.addEventListener('click', () => {
    counterValue = counterValue + 1;
    changeCounter.textContent = counterValue;
})