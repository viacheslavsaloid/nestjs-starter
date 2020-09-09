export function fileFilter(req, file, callback) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|mp4|mp3)$/)) {
    return callback(new Error('You have to upload jpg|jpeg|png|mp4|mp3!'), false);
  }

  callback(null, true);
}
