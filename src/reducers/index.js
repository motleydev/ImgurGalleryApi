/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';
import ApplicationStatus from '../reducers/ApplicationStatus.js';
import GalleryContent from '../reducers/GalleryContent.js';
import GalleryViralCheck from '../reducers/GalleryViralCheck.js';
import GallerySort from '../reducers/GallerySort.js';
import GalleryView from '../reducers/GalleryView.js';
import GalleryWindow from '../reducers/GalleryWindow.js';
import ActiveGalleryItem from '../reducers/ActiveGalleryItem.js';
const reducers = {
  ActiveGalleryItem,
  GalleryWindow,
  GalleryView,
  GallerySort,
  GalleryViralCheck,
  GalleryContent,
  ApplicationStatus
};
const combined = combineReducers(reducers);
module.exports = combined;
