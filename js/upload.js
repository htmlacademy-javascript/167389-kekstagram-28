import { imgUploadFile } from './form.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgUploadPreview = document.querySelector('.img-upload__preview img');

const uploadPhoto = () => {
  imgUploadFile.addEventListener('change', () => {
    const file = imgUploadFile.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      imgUploadPreview.src = URL.createObjectURL(file);
    }
  });
};

export {uploadPhoto};
