
import React from 'react';
import { shallow, mount, render, enzyme, configure } from 'enzyme';
import { Control, Form, Errors } from 'react-redux-form';
import Login from '../../Login/Login';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import thunk from 'redux-thunk';
import * as actionCreators from '../../actions/actionCreators/userActions';
import {AUTHENTICATED, AUTHENTICATION_ERROR} from '../../actions/constants';


// configure({ adapter: new Adapter() });
// describe('Login Component', () => {

//   it('should render without throwing an error', () => {
//     expect(shallow(<Login />).exists(<form className='login__form'></form>)).toBe(true);
//   });

//   it('should render without throwing an error', () => {
//     expect(shallow(<Login />).exists(<input id='user.username'></input>)).toBe(true);
//   });

// });

// it('should execute a loging attempt and dispatch an authenticated action', () => {
//   const store = mockStore({});

//   const login = {
//     'username': 'ExternalDashboard.User1',
//     'password': 'g^qnGBs%ra$1%6U'
//   };

//   // Return the promise
//   return store.dispatch(actionCreators.loginAttempt(login))
//     .then(() => {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual(({ type: AUTHENTICATED }));
//     });
// });


// it('should return and unauthenticated actions', () => {
//   const store = mockStore({});

//   const login = {
//     'username': 'adsad',
//     'password': 'iloasd'
//   };

//   // Return the promise
//   return store.dispatch(actionCreators.loginAttempt(login))
//     .then(() => {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual(({payload: 'Invalid email or password', type: AUTHENTICATION_ERROR }));
//     });
// });

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});
