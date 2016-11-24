/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import SetChosenImage from '../actions/SetChosenImage.js';
import ApplicationErroredData from '../actions/ApplicationErroredData.js';
import ApplicationReceivedData from '../actions/ApplicationReceivedData.js';
import ApplicationFetchingData from '../actions/ApplicationFetchingData.js';
import SetStatus from '../actions/SetStatus.js';
import UpdateGalleryContent from '../actions/UpdateGalleryContent.js';
import SetGalleryVirality from '../actions/SetGalleryVirality.js';
import SetGallerySort from '../actions/SetGallerySort.js';
import SetGalleryWindow from '../actions/SetGalleryWindow.js';
import SetGalleryView from '../actions/SetGalleryView.js';
import GetGalleryContent from '../actions/GetGalleryContent.js';
const actions = {
  GetGalleryContent,
  SetGalleryView,
  SetGalleryWindow,
  SetGallerySort,
  SetGalleryVirality,
  UpdateGalleryContent,
  SetStatus,
  ApplicationFetchingData,
  ApplicationReceivedData,
  ApplicationErroredData,
  SetChosenImage
};
module.exports = actions;
