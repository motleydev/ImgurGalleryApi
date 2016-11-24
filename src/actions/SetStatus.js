import { SET_STATUS } from './const';

function action(parameter) {
  return { type: SET_STATUS, parameter };
}

module.exports = action;
