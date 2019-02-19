import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../client/src/index.jsx';


// const sum = require('./sum');

describe('<App />', () => {
  it('should shallow', () => {
    const Wrapper = mount(<App />)
    expect(Wrapper).toMatchSnapshot()
  })
})

// it('adds 1 + 2 = 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
// it('works', () => {
//   wrap = mount(<App />);
//   expect(wrap).toMatchSnapshot();
// });