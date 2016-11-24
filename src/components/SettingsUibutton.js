import React from 'react';

import cssmodules from 'react-css-modules';
import styles from './settingsuibutton.cssmodule.scss';

// @cssmodules(styles)
const SettingsUibutton = ({ label, children, clickHandler, group, disabled }) => {

  function clicky() {
    clickHandler(label.toLowerCase())
  }
    return (
      <span>
        <button
          id={label + group}
          disabled={disabled}
          className="mdl-button mdl-js-button mdl-js-ripple-effect"
          onClick={clicky}
        > {label}
        </button>

      </span>

    );
  }

SettingsUibutton.displayName = 'SettingsUIButton';
SettingsUibutton.propTypes = {};
SettingsUibutton.defaultProps = {};

export default SettingsUibutton;


// <div className="mdl-tooltip" data-mdl-for={label + group}>
//         {label}
//         </div>
