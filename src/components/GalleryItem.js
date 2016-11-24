import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './galleryitem.cssmodule.scss';

// @cssmodules(styles, {alllowMultiple: true})
const GalleryItem = (props) => {

    const {gifv, id, is_album, account_url, cover, title, description, index, clickHandler} = props
    const imageUrl = is_album ? `${cover}b.jpg` : `${id}h.gifv`

    function clicky(){
      clickHandler(index)
    }

    return (
      <a href="#" onClick={(e) => {e.preventDefault(); clicky() }}>
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
    </a>
    );
}

GalleryItem.displayName = 'GalleryItem';
GalleryItem.propTypes = {};
GalleryItem.defaultProps = {};

export default GalleryItem;
