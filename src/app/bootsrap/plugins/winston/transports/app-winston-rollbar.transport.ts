import Transport from 'winston-transport';
import Rollbar from 'rollbar';

/**
 * @description Class to connect rollbar to winston.
 */
export class AppWinstonRollbarTransport extends Transport {
  constructor(private _rollbar: Rollbar) {
    super();
  }

  log(info, callback) {
    this._rollbar.error(info.trace, info.context);
    callback();
  }
}
