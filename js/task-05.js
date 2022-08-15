const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

let keyPressCounter = 1;

const inputName = addEventListener('keydown', event => {
    if (keyPressCounter === 1) {
        output.textContent = '';
    }  
    output.textContent +=  event.key;
    keyPressCounter += 1;
});


