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
      <div className="mdl-cell mdl-cell--8-col mdl-shadow--8dp">
        <div className="mdl-grid">
          {fetching && <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active" />}
          {!fetching && GalleryContent.map((item, index) => {
            return <GalleryItem key={index} index={index} clickHandler={SetChosenImage} {...item}/>
          })}
          {error && <p>{error}</p>}
        </div>
      </div>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {};
Gallery.defaultProps = {};

export default Gallery;
