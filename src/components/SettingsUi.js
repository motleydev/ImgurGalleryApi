import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './settingsui.cssmodule.scss';

import SUiButton from './SettingsUiButton'



@cssmodules(styles)
class SettingsUi extends React.Component {

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
              <SUiButton
                clickHandler={SetGalleryView}
                label="Hot"
                group="gallery" />
              <SUiButton
                clickHandler={SetGalleryView}
                label="Top"
                group="gallery" />
              <SUiButton
                clickHandler={SetGalleryView}
                label="User"
                group="gallery" />
            </div>
            <div className="mdl-cell mdl-cell--12-col">
              <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="viral">
                  <input
                    type="checkbox"
                    id="viral"
                    className="mdl-checkbox__input"
                    checked={GalleryViralCheck}
                    disabled={!(GalleryView === 'user')}
                    onClick={() => SetGalleryVirality(!GalleryViralCheck)}
                  />
                  <span className="mdl-checkbox__label">Show Viral?</span>
              </label>
            </div>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <p>Window:</p>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <SUiButton
                  clickHandler={SetGalleryWindow}
                  label="Top"
                  group="window"
                  disabled={!(GalleryView === 'top')}
                  />
                <SUiButton
                  clickHandler={SetGalleryWindow}
                  label="Day"
                  group="window"
                  disabled={!(GalleryView === 'top')}
                  />
                <SUiButton
                  clickHandler={SetGalleryWindow}
                  label="Week"
                  group="window"
                  disabled={!(GalleryView === 'top')}
                  />
                <SUiButton
                  clickHandler={SetGalleryWindow}
                  label="Month"
                  group="window"
                  disabled={!(GalleryView === 'top')}
                  />
                <SUiButton
                  clickHandler={SetGalleryWindow}
                  label="Year"
                  group="window"
                  disabled={!(GalleryView === 'top')}
                  />
                <SUiButton
                  clickHandler={SetGalleryWindow}
                  label="All"
                  group="window"
                  disabled={!(GalleryView === 'top')}
                  />
              </div>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <p>Sort:</p>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                <SUiButton
                  clickHandler={SetGallerySort}
                  label="Viral"
                  group="sort" />
                <SUiButton
                  clickHandler={SetGallerySort}
                  label="Top"
                  group="sort" />
                <SUiButton
                  clickHandler={SetGallerySort}
                  label="Time"
                  group="sort" />
                <SUiButton
                  clickHandler={SetGallerySort}
                  label="Rising"
                  group="sort"
                  disabled={!(GalleryView === 'user')}
                />
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
