import { APP_MESSAGES } from 'src/assets/messages';

export function appMulterFileFilter(req, file, callback) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|mp4|mp3)$/)) {
    return callback(new Error(APP_MESSAGES.MULTER.ERROR), false);
  }

  callback(null, true);
}
