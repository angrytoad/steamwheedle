import React from 'react';
import { compose } from 'redux';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './component';

const shallowExpect = compose(
  expect,
  toJson,
  shallow,
);


describe('App', () => {
  const props = {};

  it('Should match the snapshot', () => {
    shallowExpect(<App {...props} />).toMatchSnapshot();
  });
});
