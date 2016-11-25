import React from 'react';
import './app.css';

import Gallery from '../containers/GalleryPanel'
import SettingsPanel from '../containers/SettingsPanel'

class AppComponent extends React.Component {

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Title</span>
    <SettingsPanel />
  </div>
  <main className="mdl-layout__content">
    <div className="page-content">
              <Gallery />

    </div>
  </main>
</div>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
