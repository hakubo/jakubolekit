import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import config from '../config/environment';
import Application from '../src/main';

setApplication(Application.create(config.APP));

start();
