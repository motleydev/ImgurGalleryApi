import { SET_CHOSEN_IMAGE } from './const';

function action(parameter) {
  return { type: SET_CHOSEN_IMAGE, parameter };
}

module.exports = action;
