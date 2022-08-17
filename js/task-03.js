const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesGallery = document.querySelector('.gallery');
imagesGallery.style.display = 'flex';
imagesGallery.style.flexDirection = 'column';

const imageList = images.map(image => {
  const imageArr = document.createElement('li');
  // imageArr.classList.add('list');
  imageArr.style.listStyle = 'none';
  imageArr.style.marginTop = '30px';
  const imageItemList = `<img width=200 src=${image.url} alt="${image.alt}">`;
  imageArr.insertAdjacentHTML('afterbegin', imageItemList);

  return imageArr;
});

imagesGallery.append(...imageList);
