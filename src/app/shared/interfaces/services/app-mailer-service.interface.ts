import { APP_MAILERL_TEMPLATES } from 'src/app/shared/services';

export interface SendMailArgsInterface {
  templateKey: keyof typeof APP_MAILERL_TEMPLATES;
  templateData: unknown;
  from: string;
}

export type SendMailResponseInterface = Promise<boolean>;
