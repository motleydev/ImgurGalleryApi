import { SET_GALLERY_VIRALITY } from './const';

function action(parameter) {
  return { type: SET_GALLERY_VIRALITY, parameter };
}

module.exports = action;
