
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
import { shallow, mount, configure } from 'enzyme';
import thunk from 'redux-thunk';
import types from './types';
configure({ adapter: new Adapter() });
import uut from './reducers';


const initialState = {
  studyDetails: {},
  authenticated: false,
  environmentOptions: {},
  mediaOptions: [],
  environmentLoading: true,
  mediaLoading: false,
  studyDetailsLoading: false

};

describe('ON FETCH_ENVIRONMENT_BEGIN', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_ENVIRONMENT_BEGIN,
    };

    const expectedState = {
      ...initialState,
      environmentLoading: true,
      error: null


    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });
});

describe('ON FETCH_ENVIRONMENT_SUCCESS', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_ENVIRONMENT_SUCCESS,
      payload: { data: [1, 2] }
    };

    const expectedState = {
      ...initialState,
      environmentOptions: [1, 2],
      environmentLoading: false

    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});


describe('ON FETCH_MEDIAT_BEGIN', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_MEDIA_BEGIN,
    };

    const expectedState = {
      ...initialState,
      mediaLoading: true,
      error: null


    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });
});

describe('ON FETCH_MEDIA_SUCCESS', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_MEDIA_SUCCESS,
      payload: { data: [1, 2] }
    };

    const expectedState = {
      ...initialState,
      mediaOptions: [1, 2],
      mediaLoading: false

    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});

describe('ON FETCH_STUDY_DETAILST_BEGIN', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_STUDY_DETAILS_BEGIN,
    };

    const expectedState = {
      ...initialState,
      studyDetailsLoading: true,
      error: null


    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });
});

describe('ON FETCH_STUDY_DETAILS_SUCCESS', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_STUDY_DETAILS_SUCCESS,
      payload: { data: { test: 'geklo' } }
    };

    const expectedState = {
      ...initialState,
      studyDetails: { test: 'geklo' },
      studyDetailsLoading: false

    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});





