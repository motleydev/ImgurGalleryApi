import { APPLICATION_ERRORED_DATA } from './const';

function action(parameter) {
  return { type: APPLICATION_ERRORED_DATA, parameter };
}

module.exports = action;
