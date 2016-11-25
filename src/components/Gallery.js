import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './gallery.cssmodule.scss';

import GalleryItem from './GalleryItem';
import Galleryiewer from '../containers/ActiveGalleryItem'

@cssmodules(styles)
class Gallery extends React.Component {


  componentWillReceiveProps(nextProps) {
    if (
        (nextProps.GalleryView !== this.props.GalleryView) ||
        (nextProps.GallerySort !== this.props.GallerySort) ||
        (nextProps.GalleryViralCheck !== this.props.GalleryViralCheck) ||
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
    const {SetChosenImage} = this.props.actions

    return (
      <div className="mdl-cell mdl-cell--12-col">
        <div className="mdl-grid">
          {fetching && <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active" />}
          {error && <p>{error}</p>}
          <div className="mdl-cell mdl-cell--12-col">
            <div>
              <Galleryiewer />
            </div>
          </div>
          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid" styleName="grid-viewer">
              {!fetching && GalleryContent.map((item, index) => {
                return <GalleryItem key={index} index={index} clickHandler={SetChosenImage} {...item}/>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {};
Gallery.defaultProps = {};

export default Gallery;
