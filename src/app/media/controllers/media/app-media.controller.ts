import { Controller, Param, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { AppMediaEndpoints } from 'src/app/media/endpoints/app-media.endpoints';
import { AppMediaInterface, AppMediasArrInterface } from 'src/app/media/interfaces';
import { AppMediaSwaggerEndpoints } from 'src/app/media/swagger/endpoints/app-media-swagger.endpoints';
import { AppEndpointDecorator } from 'src/app/shared/decorators/controller';
import { AppSwaggerDecorator } from 'src/app/shared/decorators/helper';

import * as path from 'path';

/**
 * @description Controller to work with media
 */
@AppSwaggerDecorator(AppMediaSwaggerEndpoints.CORE)
@Controller('files')
export class AppMediaController {
  /**
   * @description Method to upload file
   */
  @AppSwaggerDecorator(AppMediaSwaggerEndpoints.UPLOAD_FILE)
  @AppEndpointDecorator(AppMediaEndpoints.UPLOAD_FILE)
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: AppMediaInterface): string {
    return file.filename;
  }

  /**
   * @description Method to upload files
   */
  @UseInterceptors(FilesInterceptor('files'))
  @AppSwaggerDecorator(AppMediaSwaggerEndpoints.UPLOAD_FILES)
  @AppEndpointDecorator(AppMediaEndpoints.UPLOAD_FILES)
  uploadFiles(@UploadedFiles() files: AppMediasArrInterface): string[] {
    return files.map(file => file.filename);
  }

  /**
   * @description Method to get file by url
   */
  @AppSwaggerDecorator(AppMediaSwaggerEndpoints.GET_FILE)
  @AppEndpointDecorator(AppMediaEndpoints.GET_FILE)
  getFile(@Param('id') id: string, @Res() res: Response): void {
    return res.sendFile(id, { root: path.join('media') });
  }
}
