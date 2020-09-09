import { ConfigModule, ConfigService } from '@nestjs/config';
import { fileFilter, fileNameFormatter } from 'src/app/media/utils/multer';
import { diskStorage } from 'multer';

export const APP_MEDIA_MULTER_CONFIGS = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    storage: diskStorage({
      destination: configService.get<string>('MEDIA_FOLDER'),
      filename: fileNameFormatter,
    }),
    fileFilter,
  }),
  inject: [ConfigService],
};
