

import React from 'react';
import { shallow, mount, render, enzyme, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import thunk from 'redux-thunk';
import AoiContainer from '../../AoiContainer'
import Iframe from 'react-iframe'

configure({ adapter: new Adapter() });

describe('Ao', () => {

  it('renders all parts', () => {
    const props = {
      match: { params: { id: "10" } },
      location: { search: { type: "stim" } }
    }
    const wrapper = shallow(<AoiContainer {...props} />);
    expect(wrapper.exists()).toEqual(true)

  });

  it('Check if has the active class', () => {
    const props = {
      match: { params: { id: "10" } },
      location: { search: { type: "stim" } }

    }
    const wrapper = mount(<AoiContainer {...props} />);

  })
})







