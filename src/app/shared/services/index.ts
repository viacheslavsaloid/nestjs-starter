import { AppLoggerService } from 'src/app/shared/services/logger/app-logger.service';
import { AppMailerService } from 'src/app/shared/services/mailer/app-mailer.service';
import { AppHelperService } from 'src/app/shared/services/helper/app-helper.service';
import { AppConfigService } from 'src/app/shared/services/config/app-config.service';

export { AppLoggerService } from 'src/app/shared/services/logger/app-logger.service';
export { AppMailerService } from 'src/app/shared/services/mailer/app-mailer.service';
export { AppHelperService } from 'src/app/shared/services/helper/app-helper.service';
export { AppConfigService } from 'src/app/shared/services/config/app-config.service';

export * from 'src/app/shared/services/mailer/app-mailer.templates';

export const APP_SHARED_SERVICES = [AppHelperService, AppMailerService, AppLoggerService, AppConfigService];
