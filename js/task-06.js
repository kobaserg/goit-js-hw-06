const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', inputFocus);
inputEl.addEventListener('blur', inputBlur);

let countLetter = 0;

function inputFocus() {
    const inputString = addEventListener('keydown', event => {
        countLetter += 1;
})  
}

function inputBlur() {
    if (countLetter === Number(inputEl.dataset.length)) {  
        inputEl.classList.toggle('valid');
    } 
    else {
        inputEl.classList.toggle('invalid');
    }
}