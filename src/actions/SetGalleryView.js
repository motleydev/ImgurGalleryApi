import { SET_GALLERY_VIEW } from './const';

function action(parameter) {
  return { type: SET_GALLERY_VIEW, parameter };
}

module.exports = action;
