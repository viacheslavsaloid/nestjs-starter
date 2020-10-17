import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { AppLoggerService } from 'src/app/shared/services/logger/app-logger.service';
import { AppConfigService } from 'src/app/shared/services';

/**
 * @description Filter to catch erorrs and move to one model
 */
@Catch(HttpException)
export class AppHttpExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly _appLoggerService: AppLoggerService,
    private readonly _appConfigService: AppConfigService,
  ) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    const exceptionResponse = exception.getResponse();
    const exceptionCode = exception.getStatus();
    const exceptionMessage = typeof exceptionResponse === 'string' ? exceptionResponse : exceptionResponse['message'];

    const errorMessage = {
      code: exceptionCode,
    };

    const sendFullErrorToClient = this._appConfigService.get('SEND_FULL_ERROR_TO_CLIENT');

    if (sendFullErrorToClient !== 'false') {
      errorMessage['message'] = exceptionMessage;
    }

    this._appLoggerService.error(JSON.stringify(errorMessage), this.constructor.name, this.constructor.name);

    response.status(exceptionCode).json(errorMessage);
  }
}
