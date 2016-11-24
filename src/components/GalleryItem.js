import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './galleryitem.cssmodule.scss';

@cssmodules(styles, {alllowMultiple: true})
class GalleryItem extends React.Component {

  render() {
    const {gifv, id, is_album, account_url, cover, title, description} = this.props
    const imageUrl = is_album ? `${cover}b.jpg` : `${id}h.gifv`
    return (
      <div
        className="demo-card-image mdl-card mdl-shadow--2dp"
        style={{backgroundImage: `url(//i.imgur.com/${imageUrl})`}}
      >
        <div className="mdl-card__title mdl-card--expand">
          <h4>{title}</h4>
        </div>
        <div className="mdl-card__supporting-text">
          <p>{description}</p>
        </div>
        <div className="mdl-card__actions">
          <span className="demo-card-image__filename">Image.jpg</span>
      </div>
    </div>
    );
  }
}

GalleryItem.displayName = 'GalleryItem';
GalleryItem.propTypes = {};
GalleryItem.defaultProps = {};

export default GalleryItem;
