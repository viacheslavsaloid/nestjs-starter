import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { AppSwaggerDocsArrInterface } from 'src/app/shared/interfaces/swagger';

import { APP_MEDIA_SWAGGER_DOCS_ARR } from 'src/app/media/swagger/doc';
import { APP_AUTH_SWAGGER_DOCS_ARR } from 'src/app/auth/swagger/doc';
import { APP_SHOP_SWAGGER_DOCS_ARR } from 'src/app/shop/swagger/doc';

import { AppAuthEnum } from 'src/app/shared/interfaces/helpers';
import { AppConfigService } from 'src/app/shared/services';

const APP_SWAGGER_DOCS: AppSwaggerDocsArrInterface = [
  ...APP_MEDIA_SWAGGER_DOCS_ARR,
  ...APP_SHOP_SWAGGER_DOCS_ARR,
  ...APP_AUTH_SWAGGER_DOCS_ARR,
];

/**
 * @description Method, which setup swagger for application
 */
export function appSwagger(app: INestApplication): void {
  const appConfigService = app.get(AppConfigService);
  const version = appConfigService.get('API_VERSION');

  APP_SWAGGER_DOCS.map(doc => {
    const { url, title, description, module, auth } = doc;

    const config = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version);

    if (auth === AppAuthEnum.BEARER) {
      config.addBearerAuth();
    }

    const options = {
      include: [module],
    };

    const document = SwaggerModule.createDocument(app, config.build(), options);
    SwaggerModule.setup(`swagger/${url}`, app, document);
  });
}
