import Transport from 'winston-transport';
import Rollbar from 'rollbar';

export class AppWinstonRollbarTransport extends Transport {
  constructor(private _rollbar: Rollbar) {
    super();
  }

  log(info, callback) {
    this._rollbar.error(info.trace, info.context);
    callback();
  }
}
