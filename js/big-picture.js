import { picture, pictures, pictureAllPhotoInfo} from './miniphoto.js';

import { isEscapeKey } from './util.js';

const NUMBER_COMMENT = 5;
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureCloseButton = bigPicture.querySelector('#picture-cancel');
let commentsOnPageNow = 0;


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

    const commentLoader = bigPicture.querySelector('.comments-loader');
    const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
    const socialComment = bigPicture.querySelector('.social__comment');
    const commentsCount = bigPicture.querySelector('.comments-count');
    const socialComments = bigPicture.querySelector('.social__comments');
    socialComments.innerHTML = '';
    


    //     const newComment = document.createElement('li');
    //     newComment.classList.add('social__comment');

    //     const newCommentAvatar = document.createElement('img');
    //     newCommentAvatar.classList.add('social__picture');
    //     newCommentAvatar.src = pictureId.comments[i].avatar;
    //     newCommentAvatar.alt = pictureId.comments[i].message;

    //     const newCommentText = document.createElement('p');
    //     newCommentText.classList.add('social__text');
    //     newCommentText.textContent = pictureId.comments[i].message;

    //     newComment.appendChild(newCommentAvatar);
    //     newComment.appendChild(newCommentText);
    //     socialComments.appendChild(newComment);
    //   }
    // };

    const createPictureComment = () => {
      //socialComments.innerHTML = '';
      const maxComments = commentsOnPageNow + NUMBER_COMMENT;
      const currentComments = pictureId.comments.slice(commentsOnPageNow, NUMBER_COMMENT);

      currentComments.forEach(({avatar, name, message}) => {
        const commentSample = socialComment.cloneNode(true);
        commentSample.querySelector('.social__picture').src = avatar;
        commentSample.querySelector('.social__picture').alt = name;
        commentSample.querySelector('.social__text').textContent = message;
        socialComments.append(commentSample);
      });
    };

    const createPictureComments = () => {
      //socialComments.innerHTML = '';
      createPictureComment(commentsOnPageNow);
      //let commentsOnPageNow = 0;
      //const maxComments = commentsOnPageNow + NUMBER_COMMENT;
      //const currentComments = pictureId.comments.slice(0, 5);
      commentLoader.addEventListener('click', () => {
        commentsOnPageNow = (pictureId.comments.length - commentsOnPageNow);
        console.log(commentsOnPageNow);
        createPictureComment(commentsOnPageNow);
        if (commentsOnPageNow >= pictureId.comments.length) {
          commentLoader.classList.add('hidden');
        };
        return commentsOnPageNow;
      });
      
      //createPictureComment(currentComments);
      // commentsCount.textContent = pictureId.comments.length;
      // socialCommentsCount.innerHTML = `${Math.min(pictureId.comments.length, maxComments)} из <span class="comments-count"> ${commentsCount.textContent}</span> комментариев`;

      commentsCount.textContent = pictureId.comments.length;
      // commentsOnPageNow = Math.min(commentsOnPageNow, pictureId.comments.length);
      // currentComments.forEach((comment) => socialComments.appendChild(createPictureComment(comment)));
      // createPictureComment(currentComments);
      // createPictureComments(createPictureComment);
      socialCommentsCount.innerHTML = `${commentsOnPageNow} из <span class="comments-count"> ${commentsCount.textContent}</span> комментариев`;
      // commentLoader.classList.remove('hidden');
      // if (commentsOnPageNow >= pictureId.comments.length) {
      //   commentLoader.classList.add('hidden');
      // }

    };

    createPictureComments();
    showBigPicture();
  });
};

findBigPicture(pictureAllPhotoInfo);

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

export {findBigPicture, onDocumentKeydown};
