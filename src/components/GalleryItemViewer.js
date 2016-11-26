import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './galleryitemviewer.cssmodule.scss';

class GalleryItemViewer extends React.Component {

  render() {

    const {ups, downs, title, description, score, id, is_album, cover, imageUrl} = this.props.item

    return (
      <div className="" styleName="galleryitemviewer-component" styleName="imageContainer">
        {id && <div className="mdl-grid" styleName="imageContainer">

          <div
            className="mdl-cell mdl-cell--6-col"
            styleName="imageContainerHolder"
            style={{backgroundImage: `url(//i.imgur.com/${imageUrl.replace('b.jpg','h.jpg')})`}} />

          <div className="mdl-cell mdl-cell--6-col">

                <div className="mdl-cell mdl-cell--12-col">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <div className="mdl-cell mdl-cell--12-col">
                    <h4>{ups} <i className="material-icons">thumb_up</i> / {downs} <i className="material-icons">thumb_down</i></h4>
                    <h3>Score: {score}</h3>
                </div>

            </div>


        </div>}
      </div>
    );
  }
}

GalleryItemViewer.displayName = 'GalleryItemViewer';
GalleryItemViewer.propTypes = {};
GalleryItemViewer.defaultProps = {};

export default cssmodules(GalleryItemViewer, styles);
