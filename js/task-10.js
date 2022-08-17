function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputNumberCollection = document.querySelector('input');
const controlsEl = document.querySelector('#controls');
const boxCollection = document.querySelector('#boxes');

let numberCollection = 0;

inputNumberCollection.addEventListener('input', event => {
  numberCollection = event.currentTarget.value;
});

const startBoxSize = 30;
const stepBoxSize = 10;
let currentBoxSize = startBoxSize;

btnCreate.addEventListener('click', event => {
  if (numberCollection === 0) {
    alert('Введите колличество элементов коллекции !!!');
  } else {
    destroyEl();
    createBoxes(numberCollection);
    inputNumberCollection.value = '';
  }
});

function createBoxes(amount) {
  let collectionEl = [];
  currentBoxSize = startBoxSize;
  for (let i = 1; i <= amount; i += 1) {
    const collectionItem = document.createElement('div');

    collectionItem.style.width = `${currentBoxSize}px`;
    collectionItem.style.height = `${currentBoxSize}px`;
    collectionItem.style.backgroundColor = getRandomHexColor();
    collectionEl.push(collectionItem);
    currentBoxSize = currentBoxSize + stepBoxSize;
  }
  boxCollection.append(...collectionEl);
  numberCollection = 0;
}

btnDestroy.addEventListener('click', event => {
  destroyEl();
});

function destroyEl() {
  const numberElForDestroy = boxCollection.children.length;
  for (let i = 0; i < numberElForDestroy; i += 1) {
    boxCollection.firstChild.remove();
  }
}
