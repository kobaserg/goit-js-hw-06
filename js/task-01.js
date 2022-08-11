
const numberOfCat = document.querySelectorAll('li.item');
console.log(`Number of categories:`, numberOfCat.length);

const itemCat = numberOfCat.forEach(el => {
    const elCat = el.querySelector('h2').textContent; 
    console.log(`Category:`, elCat);
    const numberItemCat = el.querySelectorAll('li');
    console.log(`Elements`, numberItemCat.length);

});
