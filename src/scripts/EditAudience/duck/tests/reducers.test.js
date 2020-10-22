
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
import { shallow, mount, configure } from 'enzyme';
import thunk from 'redux-thunk';
import types from '../types';
configure({ adapter: new Adapter() });
import uut from '../reducers';


const initialState = {
  audienceData: {},
  loading: true

};

describe('ON FETCH_AUDIENCE_BEGIN', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_AUDIENCE_BEGIN,
    };

    const expectedState = {
      ...initialState,
      loading: true,
      error: null


    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });
});

describe('ON FETCH_AUDIENCE_SUCCESS', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_AUDIENCE_SUCCESS,
      payload: [1, 2]
    };

    const expectedState = {
      ...initialState,
      audienceData: [1, 2],
      loading: false

    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});







