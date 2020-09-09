import { appBootstrap } from './app-bootstrap';
import { appBootstrapSuccess } from './app-bootstrap-success';
import { appBootstrapError } from './app-bootstrap-error';

appBootstrap()
  .then(appBootstrapSuccess)
  .catch(appBootstrapError);
