import { appBootstrap } from './app-bootstrap';
import { appBootstrapSuccess } from './app-bootstrap-success';
import { appBootstrapError } from './app-bootstrap-error';

/**
 * @description Endpoint of application
 */
appBootstrap()
  .then(appBootstrapSuccess)
  .catch(appBootstrapError);
