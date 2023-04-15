const RANDOM_PICTURE_COAT = 10;
//const TIME_DELAY = 0.5;
// const FILTERS = [
//   DEFAULT: 'filter-default',
//   RANDOM: 'filter-random',
//   DISCUSSED: 'filter-discussed'
// ]
const pictures = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');
// const defaultFilter = document.querySelector('#filter-default');
// const randomFilter = document.querySelector('#filter-random');
// const commentFilter = document.querySelector('#filter-discussed');


const response = await fetch('https://28.javascript.pages.academy/kekstagram/data');
const results = await response.json();

const pictureAllPhotoInfo = structuredClone(results);

const createPicture = (currentPictures) => {
  const pictureFragment = document.createDocumentFragment();

  currentPictures.forEach(({url, likes, comments, id}) => {
    const pictureSample = picture.cloneNode(true);
    pictureSample.querySelector('.picture__img').src = url;
    pictureSample.querySelector('.picture__likes').textContent = likes;
    pictureSample.querySelector('.picture__comments').textContent = comments.length;
    pictureSample.dataset.pictureId = id;
    pictureFragment.appendChild(pictureSample);
  });
  pictures.appendChild(pictureFragment);
};

const pictureRemove = () => {
  const picArray = document.querySelectorAll('.picture');
  picArray.forEach((photo) => {
    photo.remove();
  });
};

const filterList = document.querySelector('.img-filters');
filterList.addEventListener('click', (evt) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  if(evt.target.classList.contains('img-filters__button')) {
    evt.target.classList.add('img-filters__button--active');
    pictureRemove();
  }
  if (evt.target.id === 'filter-default') {
    createPicture(pictureAllPhotoInfo);
  } else if (evt.target.id === 'filter-random') {
    const sortedPictures = pictureAllPhotoInfo
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, RANDOM_PICTURE_COAT);
    createPicture(sortedPictures);
  } else if (evt.target.id === 'filter-discussed') {
    const sortedPictures = pictureAllPhotoInfo.slice().sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length);
    createPicture(sortedPictures);
  }
});

// const debounce = (callback, timeoutDelay) => {
//   let timeoutId;
//   return (...rest) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
//   };
// };
// // //results.sort(() => Math.random() - 0.5).slice(0, RANDOM_PICSTURE_COAT);
// //results.sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length);
// const renderDefaultPhoto = (photo) => {
// defaultFilter.addEventListener('click', () => {
//     defaultFilter.classList.add('img-filters__button--active');
//     randomFilter.classList.remove('img-filters__button--active');
//     commentFilter.classList.remove('img-filters__button--active');
//     pictureRemove();
//     createPicture(pictureAllPhotoInfo);
//     //photo();
//   });


//renderDefaultPhoto(debounce(()=>createPicture(pictureAllPhotoInfo), TIME_DELAY));

//const renderRandomPhoto = (photo) => {
// randomFilter.addEventListener('click', () => {
//   randomFilter.classList.add('img-filters__button--active');
//   defaultFilter.classList.remove('img-filters__button--active');
//   commentFilter.classList.remove('img-filters__button--active');
//   pictureRemove();
//   const sortedPictures = pictureAllPhotoInfo
//     .slice()
//     .sort(() => Math.random() - 0.5)
//     .slice(0, RANDOM_PICTURE_COAT);
//   createPicture(sortedPictures);
//   //photo();

// });
//};

//renderRandomPhoto(debounce(()=>createPicture(pictureAllPhotoInfo), TIME_DELAY));

// commentFilter.addEventListener('click', () => {
//   commentFilter.classList.add('img-filters__button--active');
//   defaultFilter.classList.remove('img-filters__button--active');
//   randomFilter.classList.remove('img-filters__button--active');
//   pictureRemove();
//   const sortedPictures = pictureAllPhotoInfo.slice().sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length);
//   createPicture(sortedPictures);
// });

createPicture(pictureAllPhotoInfo);

// const sortPhotos = (photos) => {
//   const onFilterClick = (evt) => {
//     if (evt.target.id === 'filter-default') {
//     createPicture(photos);
//     } else if (evt.target.id === 'filter-random') {
//       photos = results.sort(() => Math.random() - 0.5).slice(0, RANDOM_PICTURE_COAT);
//       createPicture(photos);
//     } else if (evt.target.id === 'filter-discussed') {
//       const sortedPhotosU = photos.slice().sort(sortByComments);
//       createPicture(sortedPhotosU);
//     }
//   };
//   imgFiltersContainer.addEventListener('click', debounce(onFilterClick, RERENDER_DELAY));
// };

export {pictures, picture, pictureAllPhotoInfo, results};
