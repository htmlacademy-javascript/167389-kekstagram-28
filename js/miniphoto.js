import {allPhotoInfo} from './data.js';

const pictures = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');


const pictureAllPhotoInfo = allPhotoInfo();

pictureAllPhotoInfo.forEach(({url, likes, comments}) => {
  const pictureSample = picture.cloneNode(true);
  pictureSample.querySelector('.picture__img').src = url;
  pictureSample.querySelector('.picture__likes').textContent = likes;
  pictureSample.querySelector('.picture__comments').textContent = comments;
  pictures.appendChild(pictureSample);
});
