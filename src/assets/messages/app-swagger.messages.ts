import { typeDefenition } from 'src/app/shared/helpers/functions/app-type-defenition.function';

export const APP_SWAGGER_MESSAGES = typeDefenition({
  SHOP: {
    URL: 'shop',
    TITLE: 'Shop Module',
    TAG: 'Shop',
    DESCRIPTION: 'Shop Description',
  },
  AUTH: {
    URL: 'auth',
    TITLE: 'Auth Module',
    TAG: 'Auth',
    DESCRIPTION: 'Auth Description',
  },
  MEDIA: {
    URL: 'media',
    TITLE: 'Media Module',
    TAG: 'Media',
    DESCRIPTION: 'Media Description',
    UPLOAD_FILE_OK: 'Return path',
    UPLOAD_FILES_OK: 'Return array of paths',
    GET_FILE_OK: 'Return array of paths',
  },
});
