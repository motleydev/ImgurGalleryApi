import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './galleryitemviewer.cssmodule.scss';

@cssmodules(styles)
class GalleryItemViewer extends React.Component {

  render() {

    const {ups, downs, title, description, score, id, is_album, cover, imageUrl} = this.props.item

    return (
      <div className="mdl-cell mdl-cell--12-col">
        {id && <div className="mdl-grid">

          <div className="mdl-cell mdl-cell--12-col">
            <img src={`//i.imgur.com/${imageUrl}`} width="100%" />
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <h4>{title}</h4>
          </div>


          <div className="mdl-cell mdl-cell--12-col">
            <p>{description}</p>
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">

                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--6-col">
                    <h4>{ups}</h4>
                  </div>
                  <div className="mdl-cell mdl-cell--6-col">
                    <h4>{downs}</h4>
                  </div>
                </div>

              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <h4>{score}</h4>
              </div>
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

export default GalleryItemViewer;
