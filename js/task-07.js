const inputRange = document.querySelector("#font-size-control");

inputRange.addEventListener('mouseup', onChangeTextFontSize);

function onChangeTextFontSize() {   
    const valueTextFontSize = Number(inputRange.value);
    text.style.fontSize = `${valueTextFontSize}px`;
};


