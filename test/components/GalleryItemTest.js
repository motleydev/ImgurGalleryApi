import React from 'react';
import { shallow } from 'enzyme';
import GalleryItem from 'components//GalleryItem.js';

describe('<GalleryItem />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<GalleryItem />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "galleryitem-component"', () => {
      expect(component.hasClass('galleryitem-component')).to.equal(true);
    });
  });
});
