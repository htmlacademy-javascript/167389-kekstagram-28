import { createComment, allPhotoInfo } from './data.js';
import { picture, pictures, pictureAllPhotoInfo, allPhotoInfoPictures } from './miniphoto.js';

import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureCloseButton = bigPicture.querySelector('#picture-cancel');
const NUMBER_COMMENTS = 5;
//const commentsOnPageNow = 0;


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
    bigPicture.querySelector('.comments-count').length = pictureId.comments.length;
    const commentsLoader = bigPicture.querySelector('.comments-loader');
    const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
    const commentsCount = bigPicture.querySelector('.comments-count');
    const socialComments = bigPicture.querySelector('.social__coments');
    const socialComment = bigPicture.querySelector('.social__coment');
  
    //const createPictureComment = allPhotoInfoPictures();

    // createPictureComment.forEach(({avatar, message}) => {
    //   const newComment = socialComment.cloneNode(true);
    //   const img = newComment.querySelector('img');
    //   img.src = avatar;
    //   img.alt = message;
    //   newComment.querySelector('p').textContent = message;
    //   return newComment;
    // });

    const createPictureComment = () => {
      const newComment = socialComment.cloneNode(true);
      const img = newComment.querySelector('img');
      img.src = pictureId.comments.avatar;
      img.alt = pictureId.comments.message;
      newComment.querySelector('p').textContent = pictureId.comments.message;
      return newComment;
    };

    const createPictureComments = () => {
      let commentsOnPageNow = 0;
      commentsOnPageNow += NUMBER_COMMENTS;
      commentsCount.textContent = pictureId.comments.length;
      commentsOnPageNow = Math.min(commentsOnPageNow, pictureId.comments.length);
      const currentComments = pictureId.comments.slice(commentsOnPageNow, NUMBER_COMMENTS);
      currentComments.forEach((item) => socialComments.append(createComment(item)));
      socialCommentsCount.innerHTML = `${commentsOnPageNow} из <span class="comments-count"> ${pictureId.comments.length}</span> комментариев`;

      if (commentsOnPageNow >= pictureId.comments.length) {
        commentsLoader.classList.add('hidden');
        return;
      }
      commentsLoader.classList.remove('hidden');

      commentsLoader.addEventListener('click', () => {
        commentsOnPageNow += NUMBER_COMMENTS;
        createPictureComment();
      });
    };

    createPictureComments(pictureId.comments.length, socialComment);
    showBigPicture();
    createPictureComments();
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
