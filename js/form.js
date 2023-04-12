import { isEscapeKey } from './util.js';
import { pristine } from './validation.js';
import { resetEffects } from './effects.js';
const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadFile = imgUpload.querySelector('#upload-file');
//const imgUploadButton = imgUpload.querySelector('.img-upload__control');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCloseButton = document.querySelector('#upload-cancel');
const imgHashtagsInput = imgUploadForm.querySelector('.text__hashtags');
const imgCommentInput = imgUploadForm.querySelector('.text__description');
const imgSubmitButton = document.querySelector('#upload__submit');

const SubmitButtonText = {
  SENDING: 'Загружаем...'
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openUserModal() {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

imgUploadFile.addEventListener('change', () => {
  openUserModal();
});

imgHashtagsInput.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

imgCommentInput.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

function closeBigPicture () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadForm.reset();
  pristine.reset();
  resetEffects();
}


imgUploadCloseButton.addEventListener('click', () => {
  closeBigPicture();
  document.removeEventListener('keydown', imgUploadFile);
});

export {openUserModal, closeBigPicture};
