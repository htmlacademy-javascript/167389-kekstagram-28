import {pictureAllPhotoInfo} from './miniphoto.js';
import { findBigPicture, onDocumentKeydown } from './big-picture.js';
import './form.js';
import './validation.js';
import './zoom.js';
import './effects.js';
//import { pictureAllPhotoInfo} from './miniphoto.js';

// fetch('https://28.javascript.pages.academy/kekstagram/data')
//   .then((response) => response.json())
//   .then((similarWizards) => {
//     renderSimilarList(similarWizards);
//     console.log(similarWizards);
//   });

const response = await fetch('https://28.javascript.pages.academy/kekstagram/data');
const results = await response.json();
console.log(results[1]);

export { results };

findBigPicture();
onDocumentKeydown();
pictureAllPhotoInfo();
