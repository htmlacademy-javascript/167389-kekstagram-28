import { results } from './main';
const pictures = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');

const pictureAllPhotoInfo = structuredClone(results);
console.log(pictureAllPhotoInfo);

// pictureAllPhotoInfo.forEach(({url, likes, comments, id}) => {
//   const pictureSample = picture.cloneNode(true);
//   pictureSample.querySelector('.picture__img').src = url;
//   pictureSample.querySelector('.picture__likes').textContent = likes;
//   pictureSample.querySelector('.picture__comments').textContent = comments.length;
//   pictureSample.dataset.pictureId = id;
//   pictures.appendChild(pictureSample);
// });

export {pictures, picture, pictureAllPhotoInfo};
