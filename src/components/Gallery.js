import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './gallery.cssmodule.scss';

import GalleryItem from './GalleryItem';

@cssmodules(styles)
class Gallery extends React.Component {


  componentWillReceiveProps(nextProps) {
    if (
        (nextProps.GalleryView !== this.props.GalleryView) ||
        (nextProps.GallerySort !== this.props.GallerySort) ||
        (nextProps.GalleryWindow !== this.props.GalleryWindow)
      ) {
        this.props.actions.GetGalleryContent(nextProps)
      }
  }

  componentDidMount() {
    this.props.actions.GetGalleryContent(this.props)
  }

  render() {

    const {error, fetching, idle} = this.props.ApplicationStatus
    const {GalleryContent} = this.props

    return (
      <div className="mdl-cell mdl-cell--8-col mdl-shadow--8dp">
        <div className="mdl-grid">
          {fetching && <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active" />}
          {GalleryContent.map((item, index) => {
            return <GalleryItem key={index} {...item} />
          })}
        </div>
      </div>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {};
Gallery.defaultProps = {};

export default Gallery;
