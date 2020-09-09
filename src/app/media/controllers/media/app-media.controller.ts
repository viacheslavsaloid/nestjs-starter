import { Controller, Param, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { AppMediaEndpoints } from 'src/app/media/endpoints/app-media.endpoints';
import { AppMediaInterface, AppMediasArrInterface } from 'src/app/media/interfaces';
import { AppMediaSwaggerEndpoints } from 'src/app/media/swagger/endpoints/app-media-swagger.endpoints';
import { AppEndpointDecorator, AppSwaggerDecorator } from 'src/app/shared/decorators';

import * as path from 'path';

@AppSwaggerDecorator(AppMediaSwaggerEndpoints.CORE)
@Controller('files')
export class AppMediaController {
  @AppSwaggerDecorator(AppMediaSwaggerEndpoints.UPLOAD_FILE)
  @AppEndpointDecorator(AppMediaEndpoints.UPLOAD_FILE)
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: AppMediaInterface): string {
    return file.filename;
  }

  @UseInterceptors(FilesInterceptor('files'))
  @AppSwaggerDecorator(AppMediaSwaggerEndpoints.UPLOAD_FILES)
  @AppEndpointDecorator(AppMediaEndpoints.UPLOAD_FILES)
  uploadFiles(@UploadedFiles() files: AppMediasArrInterface): string[] {
    return files.map(file => file.filename);
  }

  @AppSwaggerDecorator(AppMediaSwaggerEndpoints.GET_FILE)
  @AppEndpointDecorator(AppMediaEndpoints.GET_FILE)
  getFile(@Param('id') id: string, @Res() res: Response): void {
    return res.sendFile(id, { root: path.join('media') });
  }
}
