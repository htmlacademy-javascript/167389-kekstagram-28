//import {pictureAllPhotoInfo} from './miniphoto.js';
import { findBigPicture /*onDocumentKeydown*/ } from './big-picture.js';
import {closeBigPicture} from './form.js';
import {pictureFormSubmit} from './validation.js';
import './zoom.js';
import './effects.js';

// fetch('https://28.javascript.pages.academy/kekstagram/data')
//   .then((response) => response.json())
//   .then((similarWizards) => {
//     renderSimilarList(similarWizards);
//     console.log(similarWizards);
//   });

findBigPicture();
pictureFormSubmit(closeBigPicture);
