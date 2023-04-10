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
  return VALID_HASHTAG.test(hashtag) || hashtag === '';
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

imgUploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if(!isValid) {
    evt.preventDefault();
  }
});

export {pristine};
