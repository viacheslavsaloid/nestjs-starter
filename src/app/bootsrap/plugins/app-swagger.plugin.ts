import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { AppSwaggerDocsArrInterface } from 'src/app/shared/interfaces/swagger';

import { APP_MEDIA_SWAGGER_DOCS_ARR } from 'src/app/media/swagger/doc';
import { APP_AUTH_SWAGGER_DOCS_ARR } from 'src/app/auth/swagger/doc';
import { APP_SHOP_SWAGGER_DOCS_ARR } from 'src/app/shop/swagger/doc';

import * as packageJson from '../../../../package.json';

const APP_SWAGGER_DOCS: AppSwaggerDocsArrInterface = [
  ...APP_MEDIA_SWAGGER_DOCS_ARR,
  ...APP_SHOP_SWAGGER_DOCS_ARR,
  ...APP_AUTH_SWAGGER_DOCS_ARR,
];

export function appSwagger(app: INestApplication): void {
  APP_SWAGGER_DOCS.map(doc => {
    const { url, title, description, module, auth } = doc;

    const config = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(packageJson.version);

    if (auth === 'bearer') {
      config.addBearerAuth();
    }

    const options = {
      include: [module],
    };

    const document = SwaggerModule.createDocument(app, config.build(), options);
    SwaggerModule.setup(`swagger/${url}`, app, document);
  });
}
