import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ISendMailOptions } from '@nestjs-modules/mailer/dist/interfaces/send-mail-options.interface';
import { SendMailArgsInterface, SendMailResponseInterface } from 'src/app/shared/interfaces/services';
import { APP_MAILERL_TEMPLATES } from 'src/app/shared/services';

/**
 * @description Sevice for easy form with mails
 */
@Injectable()
export class AppMailerService {
  constructor(private readonly _mailerService: MailerService) {}

  public async sendMail(args: SendMailArgsInterface): SendMailResponseInterface {
    try {
      const { templateKey, templateData, ...options } = args;
      const sendMailOptions: ISendMailOptions = {
        ...options,
        ...APP_MAILERL_TEMPLATES[templateKey],
        context: templateData,
      };

      await this._mailerService.sendMail(sendMailOptions);

      return true;
    } catch (error) {
      return false;
    }
  }
}
