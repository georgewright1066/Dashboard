
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
import { dashboardOperations } from '../index';

const initialState = {
  studies: [],
  isLive: false,
  isCompleted: false,
  media: undefined,
  environment: undefined,
  loading: false,
  error: null,
  orderBy: undefined,
  currentSort: undefined,
  type: undefined,
  environmentLoading: true,
  openNewStudyModal: false
};

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = dashboardOperations.fetchStudiesBegin();
    const expectedState = {
      ...initialState,
      loading: true,
      error: null
    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });
});




describe('ON DESCENDING CLICK', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.SORT_BY_ASCENDING_ORDER,
      item: 'name',
      ascOrDec: 'DESCENDING'
    };

    const expectedState = {
      ...initialState,
      studies: [],
      currentSort: 'name',
      type: 'DESCENDING'
    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});


describe('ON ASCENDING CLICK', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.SORT_BY_ASCENDING_ORDER,
      item: 'name',
      ascOrDec: 'ASCENDING'
    };

    const expectedState = {
      ...initialState,
      studies: [],
      currentSort: 'name',
      type: 'ASCENDING'
    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});


describe('ON SEARCH SEACH TYPE', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.SEARCH,
      value: 'hello'
    };

    const expectedState = {
      ...initialState,
      searchTerm: 'hello'

    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});


describe('ON LIVE TOGGLE', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.IS_LIVE,
    };

    const expectedState = {
      ...initialState,
      isLive: !initialState.isLive

    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});

describe('ON COMPLETED TOGGLE', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.COMPLETED,
    };

    const expectedState = {
      ...initialState,
      isCompleted: !initialState.isCompleted

    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});


describe('ON ENVIRONMENT SELECT', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.ENVIRONMENT_TYPE,
      environment: 'Webcam'
    };

    const expectedState = {
      ...initialState,
      environment: 'Webcam'
    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});


describe('ON MEDIA SELECT', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.MEDIA_TYPE,
      value: 'Press'
    };

    const expectedState = {
      ...initialState,
      media: 'Press'
    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });
});



