
const numberOfCat = document.querySelectorAll('li.item');
console.log(`Number of categories:`, numberOfCat.length);


// console.log(numberOfCat);

const itemCat = numberOfCat.forEach(el => {
    const elCat = el.querySelector('h2').innerText; 
    console.log(`Category:`, elCat);
    const numberItemCat = el.querySelectorAll('li');
    console.log(`Elements`, numberItemCat.length);

});
// const itemCatTitle = itemCat.innerText
// console.log(itemCat)
// console.log(itemCatTitle)