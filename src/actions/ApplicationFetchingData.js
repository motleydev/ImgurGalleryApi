import { APPLICATION_FETCHING_DATA } from './const';

function action(parameter) {
  return { type: APPLICATION_FETCHING_DATA, parameter };
}

module.exports = action;
