import React from 'react';
import { shallow } from 'enzyme';
import SettingsUi from 'components//SettingsUi.js';

describe('<SettingsUi />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<SettingsUi />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "settingsui-component"', () => {
      expect(component.hasClass('settingsui-component')).to.equal(true);
    });
  });
});
