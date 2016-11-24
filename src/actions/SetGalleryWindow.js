import { SET_GALLERY_WINDOW } from './const';

function action(parameter) {
  return { type: SET_GALLERY_WINDOW, parameter };
}

module.exports = action;
