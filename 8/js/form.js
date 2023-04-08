import { isEscapeKey } from './util.js';
import { pristine } from './validation.js';
const body = document.querySelector('body');
const imgUpload = document.querySelector('.img-upload');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadFile = imgUpload.querySelector('#upload-file');
//const imgUploadButton = imgUpload.querySelector('.img-upload__control');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCloseButton = document.querySelector('#upload-cancel');
//const imgHashtagsInput = imgUploadForm.querySelector('.text__hashtags');
//const imgDescriptionInput = imgUploadForm.querySelector('.text__description');

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

function closeBigPicture () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadForm.reset();
  pristine.reset();
}


imgUploadCloseButton.addEventListener('click', () => {
  closeBigPicture();
  document.removeEventListener('keydown', imgUploadFile);
});

export {openUserModal};

