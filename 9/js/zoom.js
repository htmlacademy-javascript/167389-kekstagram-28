const scale = document.querySelector('.scale');
const scaleValue = scale.querySelector('.scale__control--value');
const scaleControlSmaller = scale.querySelector('.scale__control--smaller');
const scaleControlBigger = scale.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview img');

const ZOOM_MIN = 25;
const ZOOM_MAX = 100;
const ZOOM_STEP = 25;

scaleControlBigger.addEventListener ('click', () => {
  scaleValue.value = parseInt(scaleValue.value, 10) + ZOOM_STEP;
  if (scaleValue.value > ZOOM_MAX) {
    scaleValue.value = ZOOM_MAX;
  }
  imgPreview.style.transform = `scale(${scaleValue.value / 100})`;
});

scaleControlSmaller.addEventListener ('click', () => {
  scaleValue.value = parseInt(scaleValue.value, 10) - ZOOM_STEP;
  if (scaleValue.value < ZOOM_MIN) {
    scaleValue.value = ZOOM_MIN;
  }
  imgPreview.style.transform = `scale(${scaleValue.value / 100})`;
});
