
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import { shallow, mount, configure } from 'enzyme';
import thunk from 'redux-thunk';
import types from '../types';
configure({ adapter: new Adapter() });
import uut from '../reducers';


const initialState = {
  links: [],
  linksLoading: true,

}

describe('FETCH LINKS', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_LINKS_BEGIN,
    };

    const expectedState = {
      ...initialState,
      linksLoading: true,
      error: null

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_LINKS_SUCCESS,
      payload: [{ name: 'marcus' }]
    };

    const expectedState = {
      ...initialState,
      linksLoading: false,
      links: [{ name: 'marcus' }]

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });


})







