import { createComments, allPhotoInfo } from './data.js';
import { picture, pictures, pictureAllPhotoInfo } from './miniphoto.js';

import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureCloseButton = bigPicture.querySelector('#picture-cancel');

const findBigPicture = () => {
  pictures.addEventListener('click', (evt) => {
    const pictureTarget = evt.target.closest('.picture');
    if (!pictureTarget) {
      return;
    }
    evt.preventDefault();
    const pictureId = pictureAllPhotoInfo.find(
      (item) => item.id === Number(pictureTarget.dataset.pictureId)
    );
    bigPicture.querySelector('.big-picture__img img').src = pictureId.url;
    bigPicture.querySelector('.social__caption').textContent = pictureId.description;
    bigPicture.querySelector('.likes-count').textContent = pictureId.likes;
    const commentsCount = bigPicture.querySelector('.comments-count');
    commentsCount.length = pictureId.comments;
    showBigPicture(pictureId);
  });
};

findBigPicture(allPhotoInfo);

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function showBigPicture() {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  findBigPicture();
  document.addEventListener('keydown', onDocumentKeydown);
}

picture.addEventListener('click', () => {
  showBigPicture();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
});

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureCloseButton.addEventListener('click', () => {
  closeBigPicture();
  document.removeEventListener('keydown', showBigPicture);
});

export {findBigPicture};
