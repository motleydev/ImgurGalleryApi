import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './galleryitemviewer.cssmodule.scss';

@cssmodules(styles)
class GalleryItemViewer extends React.Component {

  render() {
    return (
      <div className="mdl-cell mdl-cell--12-col">
        <div className="mdl-grid">

          <div className="mdl-cell mdl-cell--12-col">
            <img src="*" width="100%" />
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <h4>The title of the content </h4>
          </div>


          <div className="mdl-cell mdl-cell--12-col">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">

                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--6-col">
                    <h3>Upvote</h3>
                  </div>
                  <div className="mdl-cell mdl-cell--6-col">
                    <h3>Downvote</h3>
                  </div>
                </div>

              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <h4>4,756</h4>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

GalleryItemViewer.displayName = 'GalleryItemViewer';
GalleryItemViewer.propTypes = {};
GalleryItemViewer.defaultProps = {};

export default GalleryItemViewer;
