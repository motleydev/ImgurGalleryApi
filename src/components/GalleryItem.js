import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './galleryitem.cssmodule.scss';

// @cssmodules(styles, {alllowMultiple: true})
const GalleryItem = (props) => {

    const {gifv, id, is_album, account_url, cover, title, description, index, clickHandler, ups, downs, score} = props
    const imageUrl = is_album ? `${cover}b.jpg` : `${id}h.gifv`

    function clicky(){
      const obj = {imageUrl, id, title, description, ups, downs, score}
      clickHandler(obj)
    }

    return (
      <a styleName="demoCardImage" href="#" onClick={(e) => {e.preventDefault(); clicky() }}>
      <div
        className="mdl-shadow--2dp"
        styleName="demoCard"
        style={{backgroundImage: `url(//i.imgur.com/${imageUrl})`}}
      >
        <div styleName="content">
          <p>{description || title}</p>
        </div>
    </div>
    </a>
    );
}

GalleryItem.displayName = 'GalleryItem';
GalleryItem.propTypes = {};
GalleryItem.defaultProps = {};

export default cssmodules(GalleryItem, styles, {allowMultiple: true});
