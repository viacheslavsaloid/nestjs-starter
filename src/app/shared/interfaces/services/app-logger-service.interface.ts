import { APP_MESSAGES } from 'src/assets/messages';

export interface AppLoggerArgsInterface {
  key: keyof typeof APP_MESSAGES.LOGGER;
  message: string;
  context?: string;
}

export type AppLoggerResponseInterface = void;
