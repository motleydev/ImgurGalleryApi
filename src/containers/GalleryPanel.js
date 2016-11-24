import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {GetGalleryContent} from '../actions/';
import Gallery from '../components/Gallery';

class GalleryPanel extends Component {
  render() {
    const { actions } = this.props;
    return <Gallery {...this.props} />;
  }
}

GalleryPanel.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    GalleryContent: state.GalleryContent,
    GalleryView: state.GalleryView,
    GalleryWindow: state.GalleryWindow,
    GallerySort: state.GallerySort,
    GalleryViralCheck: state.GalleryViralCheck,
    ApplicationStatus: state.ApplicationStatus,
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { GetGalleryContent };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPanel);
