import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import AllAgents from '../client/src/AllAgents.jsx';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });
import App from '../client/src/AllAgents.jsx';



test('Should successfully mount App', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

describe('<App />', () => {
  it('render correctly ', () => {
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });
  it('should shallow', () => {
    const Wrapper = mount(<App />)
    expect(Wrapper).toMatchSnapshot()
  })
})


