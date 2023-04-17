import './zoom.js';
import './effects.js';
import {findBigPicture} from './big-picture.js';
import {closeUserModal} from './form.js';
import {pictureFormSubmit} from './validation.js';

import {uploadPhoto} from './upload.js';

findBigPicture();
pictureFormSubmit(closeUserModal);
uploadPhoto();
