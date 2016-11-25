import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {} from '../actions/';
import GalleryItemViewer from '../components/GalleryItemViewer';

class ActiveGalleryItem extends Component {
  render() {
    const { actions, ActiveGalleryItem, GalleryContent } = this.props;
    return (
      <GalleryItemViewer item={ActiveGalleryItem} />
      );
  }
}

ActiveGalleryItem.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    ActiveGalleryItem: state.ActiveGalleryItem,
    GalleryContent: state.GalleryContent,
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveGalleryItem);
