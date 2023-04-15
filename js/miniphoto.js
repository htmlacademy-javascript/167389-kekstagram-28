const RANDOM_PICTURE_COAT = 10;
// const TIME_DELAY = 0.5;
const pictures = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const commentFilter = document.querySelector('#filter-discussed');


const response = await fetch('https://28.javascript.pages.academy/kekstagram/data');
const results = await response.json();

const pictureAllPhotoInfo = structuredClone(results);

const createPicture = () => {
  const pictureFragment = document.createDocumentFragment();

  pictureAllPhotoInfo.forEach(({url, likes, comments, id}) => {
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
// //results.sort(() => Math.random() - 0.5).slice(0, RANDOM_PICSTURE_COAT);
// //results.sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length);
defaultFilter.addEventListener('click', () => {
  defaultFilter.classList.add('img-filters__button--active');
  randomFilter.classList.remove('img-filters__button--active');
  commentFilter.classList.remove('img-filters__button--active');
  pictureRemove();
  pictureAllPhotoInfo.slice();
  createPicture(pictureAllPhotoInfo);
});

randomFilter.addEventListener('click', () => {
  randomFilter.classList.add('img-filters__button--active');
  defaultFilter.classList.remove('img-filters__button--active');
  commentFilter.classList.remove('img-filters__button--active');
  pictureRemove();
  pictureAllPhotoInfo
    .sort(() => Math.random() - 0.5)
    .slice(0, RANDOM_PICTURE_COAT);
  createPicture(pictureAllPhotoInfo);

});

commentFilter.addEventListener('click', () => {
  commentFilter.classList.add('img-filters__button--active');
  defaultFilter.classList.remove('img-filters__button--active');
  randomFilter.classList.remove('img-filters__button--active');
  pictureRemove();
  pictureAllPhotoInfo.sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length);
  createPicture(pictureAllPhotoInfo);
});

createPicture(results);

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
