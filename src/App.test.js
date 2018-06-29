import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('<MyComponent />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('header has the company title', () => {
    const wrapper = shallow(
      <div>
        <App />
        <h1>SMYK BSL</h1>
      </div>
    );
    expect(wrapper.text()).toEqual('<App />SMYK BSL');
  });
});
