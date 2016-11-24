import { UPDATE_GALLERY_CONTENT } from './const';

function action(parameter) {
  return { type: UPDATE_GALLERY_CONTENT, parameter };
}

module.exports = action;
