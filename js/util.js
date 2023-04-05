const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }

  const result = min + Math.random() * (max + 1 - min);

  return Math.floor(result);
};

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

export {getRandomNumber, isEscapeKey};
