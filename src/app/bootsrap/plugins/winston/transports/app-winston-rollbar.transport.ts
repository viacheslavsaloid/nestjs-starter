import Transport from 'winston-transport';
import Rollbar from 'rollbar';

export class AppWinstonRollbarTransport extends Transport {
  private rollbar: Rollbar;

  constructor(rollbar: Rollbar) {
    super();
    this.rollbar = rollbar;
  }

  log(info, callback) {
    this.rollbar.error(info.trace, info.context);
    callback();
  }
}
