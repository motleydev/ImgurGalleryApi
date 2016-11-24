import React from 'react';
import { shallow } from 'enzyme';
import Gallery from 'components//Gallery.js';

describe('<Gallery />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Gallery />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "gallery-component"', () => {
      expect(component.hasClass('gallery-component')).to.equal(true);
    });
  });
});
