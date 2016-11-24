/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {
  GetGalleryContent,
  SetGalleryView,
  SetGalleryWindow,
  SetGallerySort,
  SetGalleryVirality,
  UpdateGalleryContent,
  SetStatus,
  ApplicationFetchingData,
  ApplicationReceivedData,
  ApplicationErroredData
} from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, ActiveGalleryItem, GalleryWindow, GalleryView, GallerySort, GalleryViralCheck, GalleryContent, ApplicationStatus} = this.props;
    return (
      <Main
        actions={actions}
        ActiveGalleryItem={ActiveGalleryItem}
        GalleryWindow={GalleryWindow}
        GalleryView={GalleryView}
        GallerySort={GallerySort}
        GalleryViralCheck={GalleryViralCheck}
        GalleryContent={GalleryContent}
        ApplicationStatus={ApplicationStatus}/>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  ActiveGalleryItem: PropTypes.object.isRequired,
  GalleryWindow: PropTypes.string.isRequired,
  GalleryView: PropTypes.string.isRequired,
  GallerySort: PropTypes.string.isRequired,
  GalleryViralCheck: PropTypes.bool.isRequired,
  GalleryContent: PropTypes.array,
  ApplicationStatus: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    ActiveGalleryItem: state.ActiveGalleryItem,
    GalleryWindow: state.GalleryWindow,
    GalleryView: state.GalleryView,
    GallerySort: state.GallerySort,
    GalleryViralCheck: state.GalleryViralCheck,
    GalleryContent: state.GalleryContent,
    ApplicationStatus: state.ApplicationStatus
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
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
    ApplicationErroredData
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
