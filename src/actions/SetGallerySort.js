import { SET_GALLERY_SORT } from './const';

function action(parameter) {
  return { type: SET_GALLERY_SORT, parameter };
}

module.exports = action;
