import { ConfigService, ConfigModule } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const APP_TYPEORM_CONFIGS: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
    type: configService.get<'mysql' | 'postgres'>('TYPEORM_TYPE'),
    host: configService.get<string>('TYPEORM_HOST'),
    port: configService.get<number>('TYPEORM_PORT'),
    username: configService.get<string>('TYPEORM_USERNAME'),
    password: configService.get<string>('TYPEORM_PASSWORD'),
    database: configService.get<string>('TYPEORM_DATABASE'),
    synchronize: configService.get<boolean>('TYPEORM_SYNCHRONIZE'),
    keepConnectionAlive: configService.get<boolean>('TYPEORM_KEEP_CONNECTION_ALIVE'),
    autoLoadEntities: configService.get<boolean>('TYPEORM_AUTO_LOAD_ENTITIES'),
  }),
};
