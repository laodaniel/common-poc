import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button.web';

/* eslint-disable react/jsx-filename-extension */

describe('Button', () => {
  it('should render', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.toBeDefined());
  });
});
