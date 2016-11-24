import { APPLICATION_RECEIVED_DATA } from './const';

function action(parameter) {
  return { type: APPLICATION_RECEIVED_DATA, parameter };
}

module.exports = action;
