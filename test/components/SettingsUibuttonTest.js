import React from 'react';
import { shallow } from 'enzyme';
import SettingsUibutton from 'components//SettingsUibutton.js';

describe('<SettingsUibutton />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<SettingsUibutton />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "settingsuibutton-component"', () => {
      expect(component.hasClass('settingsuibutton-component')).to.equal(true);
    });
  });
});
