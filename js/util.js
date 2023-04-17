const isEscapeKey = (evt) => evt.key === 'Escape';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const isSuccessMessage = () => {
  const message = successMessage.cloneNode(true);
  document.body.appendChild(message);
  const messageCloseButton = document.querySelector('.success__button');
  messageCloseButton.addEventListener('click', () => {
    message.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      message.remove();
    }
  });
  document.addEventListener('click', (evt) => {
    if (!evt.target.closest('.success__inner')) {
      message.remove();

    }
  });
};

const isErrorMessage = () => {
  const message = errorMessage.cloneNode(true);
  document.body.appendChild(message);

  const modalCloseButton = document.querySelector('.error__button');

  modalCloseButton.addEventListener('click', () => {
    message.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      message.remove();
    }
  });
  document.addEventListener('click', (evt) => {
    if (!evt.target.closest('.error__inner')) {
      message.remove();
    }
  });
};

export {isEscapeKey, isSuccessMessage, isErrorMessage};
