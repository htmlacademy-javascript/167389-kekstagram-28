import { pictures, pictureAllPhotoInfo} from './miniphoto.js';

import { isEscapeKey } from './util.js';

const NUMBER_COMMENT = 5;
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureCloseButton = bigPicture.querySelector('#picture-cancel');

const commentLoader = bigPicture.querySelector('.comments-loader');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const socialComment = bigPicture.querySelector('.social__comment');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');

let commentsOnPageNow = 0;
let currentPicture = null;

const createPictureComments = () => {
  const currentComments = currentPicture.comments.slice(commentsOnPageNow, commentsOnPageNow + NUMBER_COMMENT);
  commentsOnPageNow += currentComments.length;

  currentComments.forEach(({avatar, name, message}) => {
    const commentSample = socialComment.cloneNode(true);
    commentSample.querySelector('.social__picture').src = avatar;
    commentSample.querySelector('.social__picture').alt = name;
    commentSample.querySelector('.social__text').textContent = message;
    socialComments.append(commentSample);
  });

  if (commentsOnPageNow >= currentPicture.comments.length) {
    commentLoader.classList.add('hidden');
  }

  commentsCount.textContent = currentPicture.comments.length;
  socialCommentsCount.innerHTML = `${commentsOnPageNow} из <span class="comments-count"> ${commentsCount.textContent}</span> комментариев`;
};


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
    currentPicture = pictureId;
    bigPicture.querySelector('.big-picture__img img').src = pictureId.url;
    bigPicture.querySelector('.social__caption').textContent = pictureId.description;
    bigPicture.querySelector('.likes-count').textContent = pictureId.likes;
    bigPicture.querySelector('.comments-count').length = pictureId.comments.length;
    socialComments.innerHTML = '';
    commentsOnPageNow = 0;
    commentLoader.classList.remove('hidden');

    createPictureComments(pictureId);
    showBigPicture();
  });
};

commentLoader.addEventListener('click', () => {
  createPictureComments();
});

findBigPicture();

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function showBigPicture() {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

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
});

export {findBigPicture, onDocumentKeydown};
