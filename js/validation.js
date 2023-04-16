import {isErrorMessage, isSuccessMessage} from './util.js';
const VALID_HASHTAG = /#[a-zа-яё0-9]{1,19}$/i;
const VALID_HASHTAG_COUNTS = 5;
const VALID_COMMENT_LENGTH = 140;

const imgUploadForm = document.querySelector('.img-upload__form');
const validHashtag = document.querySelector('.text__hashtags');
const validComment = document.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

function validateHashtag (hashtag) {
  return VALID_HASHTAG.test(hashtag.trim()) || hashtag === '';
}

pristine.addValidator(validHashtag, validateHashtag, 'Ошибка в хештеге');

function validateHashtagsCounts (hashtags) {
  return hashtags
    .split('')
    .filter((hashtag) => hashtag === '#')
    .length <= VALID_HASHTAG_COUNTS;
}

pristine.addValidator(validHashtag, validateHashtagsCounts, 'Ошибка в хештегаx');

function validateComment (comment) {
  return comment.length <= VALID_COMMENT_LENGTH;
}

pristine.addValidator(validComment, validateComment, 'Длина комментария не должна превышать 140 символов');


const pictureFormSubmit = (onSuccess) => {
  imgUploadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if(isValid) {
      const formData = new FormData(evt.target);
      fetch(
        'https://28.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
            isSuccessMessage();
          } else {
            isErrorMessage();
          }
        })
        .catch(() => {
          isErrorMessage();
        });
    }
    return evt.preventDefault;
  });
};

export {pristine, pictureFormSubmit};
