import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './galleryitem.cssmodule.scss';

@cssmodules(styles)
class GalleryItem extends React.Component {

  render() {
    return (
      <div className="galleryitem-component" styleName="galleryitem-component">
        Please edit src/components//GalleryItem.js to update this component!
      </div>
    );
  }
}

GalleryItem.displayName = 'GalleryItem';
GalleryItem.propTypes = {};
GalleryItem.defaultProps = {};

export default GalleryItem;
