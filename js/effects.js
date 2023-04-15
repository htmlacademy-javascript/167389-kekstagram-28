const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const EFFECT_START = EFFECTS[0];
let effectNow = EFFECT_START;
const slider = document.querySelector('.img-upload__effect-level');
const sliderElement = slider.querySelector('.effect-level__slider');
const valueElement = slider.querySelector('.effect-level__value');
const imageElement = document.querySelector('.img-upload__preview img');

noUiSlider.create(sliderElement, {
  range: {
    min: EFFECT_START.min,
    max: EFFECT_START.max,
  },
  start: 100,
  step: EFFECT_START.step,
  connect: 'lower'
});

const isDefault = () => {
  slider.classList.remove('hidden');
  if (effectNow === EFFECT_START) {
    slider.classList.add('hidden');
    imageElement.style.filter = 'none';
  }
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effectNow.min,
      max: effectNow.max,
    },
    start: effectNow.max,
    step: effectNow.step,
  });
  isDefault();
};

const effectList = document.querySelector('.effects__list');

effectList.onchange = function (evt) {
  if(evt.target.classList.contains('effects__radio')) {
    effectNow = EFFECTS.find((effect) => effect.name === evt.target.value);
    updateSlider(effectNow);
  }
};

const onSliderChange = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imageElement.style.filter = isDefault()
    ? EFFECT_START.style
    : `${effectNow.style}(${sliderValue}${effectNow.unit})`;
  valueElement.value = sliderValue;
};

sliderElement.noUiSlider.on('update', onSliderChange);

const resetEffects = () => {
  effectNow = EFFECT_START;
  updateSlider();
};

export {resetEffects};
