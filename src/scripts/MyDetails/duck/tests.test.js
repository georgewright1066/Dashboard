
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import {shallow, mount, configure} from 'enzyme';
import thunk from 'redux-thunk';
import {dashboardOperations} from '.';
import types from './types';
import Button from '../../common/components/Button';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Button/>);
});

// it('calls onClick event on click of a board square', () =>{
//   const onClick = jest.fn();
//   let wrapper = mount(<Button  onClick={onAscendingClick}/>);
//   wrapper.find('button.square').first().simulate('click');
//   expect(onClick).toBeCalledWith(0);
// });
