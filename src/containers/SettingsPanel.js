import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  SetGalleryVirality,
  SetGalleryWindow,
  SetGalleryView,
  SetGallerySort
} from '../actions/';

import SettingsUI from '../components/SettingsUi';

class SettingsPanel extends Component {
  render() {
    const { actions } = this.props;
    return <SettingsUI {...this.props} />;
  }
}

SettingsPanel.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    ActiveGalleryItem: state.ActiveGalleryItem,
    GalleryWindow: state.GalleryWindow,
    GalleryView: state.GalleryView,
    GallerySort: state.GallerySort,
    GalleryViralCheck: state.GalleryViralCheck,
    GalleryContent: state.GalleryContent
  };

  return props;
}

function mapDispatchToProps(dispatch) {

  const actions = {
    SetGalleryVirality,
    SetGalleryWindow,
    SetGalleryView,
    SetGallerySort
  };

  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
