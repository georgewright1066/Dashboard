
import React from 'react';
import { shallow, mount, render, enzyme, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import thunk from 'redux-thunk';
import ToolTip from '../../components/Tooltip';
import Task from '../../components/Task';

configure({ adapter: new Adapter() });


describe('Tooltip', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<ToolTip />));
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('The Tooltip should contain a heading in the Tooltip Componenent', () => {
    expect(wrapper.find('h4').exists()).toBe(true);
  });

  it('renders the value of displayValue', () => {
    wrapper.setProps({ name: 'test' });
    expect(wrapper.text()).toEqual('test');
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

});

