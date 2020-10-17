import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';
import { MailerOptions } from '@nestjs-modules/mailer';
import { AppEnvEnum } from 'src/app/shared/interfaces/helpers';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { AppConfigService } from 'src/app/shared/services';

export const APP_MAILER_CONFIG: MailerAsyncOptions = {
  imports: [AppSharedModule],
  inject: [AppConfigService],
  useFactory: (appConfigService: AppConfigService): MailerOptions => ({
    transport: appConfigService.get('MAILER_TRANSPORT'),
    defaults: {
      from: 'viacheslavsaloid.work@gmail.com',
    },
    preview: appConfigService.get('MAIL_FOLDER') !== AppEnvEnum.PROD,
    template: {
      dir: __dirname + '../../../../assets/' + appConfigService.get('MAIL_FOLDER'),
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }),
};
