//import { imgUploadCloseButton } from "./form";
const isEscapeKey = (evt) => evt.key === 'Escape';

// const showAlert = (message) => {
//   const alertContainer = document.createElement('div');
//   alertContainer.style.zIndex = '100';
//   alertContainer.style.position = 'absolute';
//   alertContainer.style.left = '0';
//   alertContainer.style.top = '0';
//   alertContainer.style.right = '0';
//   alertContainer.style.padding = '10px 3px';
//   alertContainer.style.fontSize = '30px';
//   alertContainer.style.textAlign = 'center';
//   alertContainer.style.backgroundColor = 'red';

//   alertContainer.textContent = message;

//   document.body.append(alertContainer);

//   setTimeout(() => {
//     alertContainer.remove();
//   }, ALERT_SHOW_TIME);
// };

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
  document.addEventListener('mousedown', () => {
    if (document.activeElement !== message) {
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
    if (evt.target.closest('.error__inner')) {
      message.remove();
    }
  });
};

export {isEscapeKey, isSuccessMessage, isErrorMessage};
