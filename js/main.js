//import {pictureAllPhotoInfo} from './miniphoto.js';
import { findBigPicture /*onDocumentKeydown*/ } from './big-picture.js';
import {closeUserModal} from './form.js';
import {pictureFormSubmit} from './validation.js';
import './zoom.js';
import './effects.js';
import {uploadPhoto} from './upload.js';

findBigPicture();
pictureFormSubmit(closeUserModal);
uploadPhoto();
