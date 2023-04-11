// import { picture, pictures, pictureAllPhotoInfo} from './miniphoto.js';

// import { isEscapeKey } from './util.js';

// const bigPicture = document.querySelector('.big-picture');
// const body = document.querySelector('body');
// const bigPictureCloseButton = bigPicture.querySelector('#picture-cancel');
// const NUMBER_COMMENTS = 5;


// const findBigPicture = () => {
//   pictures.addEventListener('click', (evt) => {
//     const pictureTarget = evt.target.closest('.picture');
//     if (!pictureTarget) {
//       return;
//     }
//     evt.preventDefault();
//     const pictureId = pictureAllPhotoInfo.find(
//       (item) => item.id === Number(pictureTarget.dataset.pictureId)
//     );
//     bigPicture.querySelector('.big-picture__img img').src = pictureId.url;
//     bigPicture.querySelector('.social__caption').textContent = pictureId.description;
//     bigPicture.querySelector('.likes-count').textContent = pictureId.likes;
//     bigPicture.querySelector('.comments-count').length = pictureId.comments.length;

//     const commentsLoader = bigPicture.querySelector('.comments-loader');
//     const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
//     const commentsCount = bigPicture.querySelector('.comments-count');
//     const socialComments = bigPicture.querySelector('.social__comments');


//     const socialComment = bigPicture.querySelector('.social__comment');
//     const createPictureComment = () => {
//       for (let i = 0; i < pictureId.comments.length; i++) {
//         const newComment = document.createElement('li');
//         newComment.classList.add('social__comment');

//         const newCommentAvatar = document.createElement('img');
//         newCommentAvatar.classList.add('social__picture');
//         newCommentAvatar.src = pictureId.comments[i].avatar;
//         newCommentAvatar.alt = pictureId.comments[i].message;

//         const newCommentText = document.createElement('p');
//         newCommentText.classList.add('social__text');
//         newCommentText.textContent = pictureId.comments[i].message;

//         newComment.appendChild(newCommentAvatar);
//         newComment.appendChild(newCommentText);
//         socialComments.appendChild(newComment);
//       }
//     };

//     const createPictureComments = () => {
//       socialComments.innerHTML = '';
//       let commentsOnPageNow = 0;
//       commentsOnPageNow += NUMBER_COMMENTS;
//       commentsLoader.addEventListener('click', () => {
//         commentsOnPageNow += NUMBER_COMMENTS;
//         if (commentsOnPageNow >= pictureId.comments.length) {
//           commentsLoader.classList.add('hidden');
//         }
//       });

//       commentsCount.textContent = pictureId.comments.length;
//       //commentsOnPageNow = Math.min(commentsOnPageNow, pictureId.comments.length);
//       const currentComments = pictureId.comments.slice(commentsOnPageNow, NUMBER_COMMENTS);
//       currentComments.forEach((comment) => socialComments.appendChild(createPictureComment(comment)));
//       socialCommentsCount.innerHTML = `${commentsOnPageNow} из <span class="comments-count"> ${commentsCount.textContent}</span> комментариев`;
//       createPictureComment(currentComments);
//       commentsLoader.classList.remove('hidden');
//       if (commentsOnPageNow >= pictureId.comments.length) {
//         commentsLoader.classList.add('hidden');
//       }
//     };

//     createPictureComments(pictureId.comments.length, socialComment);
//     showBigPicture();
//   });
// };

// findBigPicture(pictureAllPhotoInfo);

// const onDocumentKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     closeBigPicture();
//   }
// };

// function showBigPicture() {
//   bigPicture.classList.remove('hidden');
//   body.classList.add('modal-open');
//   findBigPicture();
//   document.addEventListener('keydown', onDocumentKeydown);
// }

// picture.addEventListener('click', () => {
//   showBigPicture();
// });

// document.addEventListener('keydown', (evt) => {
//   if (isEscapeKey(evt)) {
//     closeBigPicture();
//   }
// });

// function closeBigPicture () {
//   bigPicture.classList.add('hidden');
//   body.classList.remove('modal-open');
//   document.removeEventListener('keydown', onDocumentKeydown);
// }

// bigPictureCloseButton.addEventListener('click', () => {
//   closeBigPicture();
//   document.removeEventListener('keydown', showBigPicture);
// });

// export {findBigPicture, onDocumentKeydown};
