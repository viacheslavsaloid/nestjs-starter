import { typeDefenition } from 'src/app/shared/helpers/functions';

export const APP_MAILERL_TEMPLATES = typeDefenition({
  MAIL_CONFIRMATION: {
    template: 'mail-confirmation',
    subject: 'Successful registration',
  },
  MAIL_WITH_AUTO_GENERATED_PASSWORD: {
    template: 'mail-with-auto-generated-password',
    subject: 'Successful registration with auto generated password',
  },
});
