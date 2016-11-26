import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './gallery.cssmodule.scss';

import GalleryItem from './GalleryItem';
import Galleryiewer from '../containers/ActiveGalleryItem'

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
    const {GalleryContent, ActiveGalleryItem} = this.props
    const {SetChosenImage} = this.props.actions

    return (
        <div className="mdl-grid" styleName="galleryLayout">
          {fetching && <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active" />}
          {error && <p>{error}</p>}
          {ActiveGalleryItem.hasOwnProperty('id') && <div styleName="galleryViewer">
              <Galleryiewer />
          </div>}
          <div styleName="gridViewer">
            <div className="mdl-grid" styleName="photo-grid">
              {!fetching && GalleryContent.map((item, index) => {
                return <GalleryItem key={index} index={index} clickHandler={SetChosenImage} {...item}/>
              })}
            </div>
          </div>
        </div>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {};
Gallery.defaultProps = {};

export default cssmodules(Gallery, styles);
