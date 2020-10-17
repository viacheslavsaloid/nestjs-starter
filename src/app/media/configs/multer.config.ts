import { appMulterFileFilter, appMulterFileName } from 'src/app/media/helpers/multer';
import { diskStorage } from 'multer';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { AppConfigService } from 'src/app/shared/services';

/**
 * @description Configs for multer
 */
export const APP_MEDIA_MULTER_CONFIG = {
  imports: [AppSharedModule],
  inject: [AppConfigService],
  useFactory: (appConfigService: AppConfigService) => ({
    storage: diskStorage({
      destination: appConfigService.get('MEDIA_FOLDER'),
      filename: appMulterFileName,
    }),
    fileFilter: appMulterFileFilter,
  }),
};
