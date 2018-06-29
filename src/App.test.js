import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has the company title', () => {
  const wrapper = shallow(<div><App /><b>important</b></div>);
  expect(wrapper.text()).to.equal('<App />important');
});