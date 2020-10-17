import { typeDefenition } from 'src/app/shared/helpers/functions/app-type-defenition.function';

export const APP_AUTH_MESSAGES = typeDefenition({
  ERRORS: {
    EMAIL_EXIST: `Email Already Exist`,
    INVALID_EMAIL: `Invalid Email`,
    INVALID_PASSWORD: `Invalid Password`,
  },
});
