//import {pictureAllPhotoInfo} from './miniphoto.js';
import { findBigPicture /*onDocumentKeydown*/ } from './big-picture.js';
import {closeUserModal} from './form.js';
import {pictureFormSubmit} from './validation.js';
import './zoom.js';
import './effects.js';
import {uploadPhoto} from './upload.js';

// fetch('https://28.javascript.pages.academy/kekstagram/data')
//   .then((response) => response.json())
//   .then((similarWizards) => {
//     renderSimilarList(similarWizards);
//     console.log(similarWizards);
//   });
const response = await fetch('https://28.javascript.pages.academy/kekstagram/data');
const results = await response.json();
findBigPicture();
pictureFormSubmit(closeUserModal);
uploadPhoto();
export {results};
