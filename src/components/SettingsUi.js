import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './settingsui.cssmodule.scss';

import SUiButton from './SettingsUiButton'

const m = require('exports-loader?componentHandler!material-design-lite/material.js');


@cssmodules(styles)
class SettingsUi extends React.Component {

  componentDidUpdate() {
    m.upgradeDom();
  }

  render() {
    let { GalleryViralCheck, GalleryWindow, GallerySort, GalleryView } = this.props
    const {SetGalleryVirality, SetGalleryWindow, SetGalleryView, SetGallerySort } = this.props.actions

    return (
      <div className="mdl-cell mdl-cell--12-col">
        <div className="mdl-grid">

          <div className="mdl-cell mdl-cell--12-col">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col">
              <p>Gallery:</p>
            </div>
            <div className="mdl-cell mdl-cell--12-col">
            {['Hot','Top','User'].map((ui, index) => {
                return (
                  <SUiButton
                    clickHandler={SetGalleryView}
                    active={GalleryView}
                    label={ui}
                    group="gallery" />
                )
              })}
            </div>
            <div className="mdl-cell mdl-cell--12-col">
              {GalleryView === 'user' && <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="viral">
                  <input
                    type="checkbox"
                    id="viral"
                    className="mdl-checkbox__input"
                    checked={GalleryViralCheck}
                    onClick={() => SetGalleryVirality(!GalleryViralCheck)}
                  />
                  <span className="mdl-checkbox__label">Show Viral?</span>
              </label>}
            </div>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <p>Window:</p>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
              {['Top', 'Day', 'Week', 'Month', 'Year', 'All'].map((ui, index) => {
                return (
                  <SUiButton
                  clickHandler={SetGalleryWindow}
                  label={ui}
                  group="window"
                  active={GalleryWindow}
                  disabled={!(GalleryView === 'top')}
                  />
                )
              })}
              </div>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <p>Sort:</p>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                {['Viral', 'Top', 'Time', 'Rising'].map((ui, index) => {
                return (
                  <SUiButton
                  clickHandler={SetGallerySort}
                  active={GallerySort}
                  label={ui}
                  group="sort"
                  disabled={ui === 'Rising' && !(GalleryView === 'user')}
                />
                )
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SettingsUi.displayName = 'SettingsUI';
SettingsUi.propTypes = {};
SettingsUi.defaultProps = {};

export default SettingsUi;
