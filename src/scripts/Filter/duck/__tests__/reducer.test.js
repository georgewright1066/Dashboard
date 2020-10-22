
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import {shallow, mount, configure} from 'enzyme';
import thunk from 'redux-thunk';
import types from '../types';
configure({ adapter: new Adapter() });
import uut from '../reducers';
import {filterOperations} from '../index';

const initialState = {
  ageData: [],
  locationData:[],
  familyData:[],
  genderData:[],
  loading: true,
  genderLoading: true,
  familyLoading:true,
  earningsLoading:true,
  filtersArray:[],
  areFiltersLive: false,
  modalOpen: false,
  checkedItems: []
};

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = filterOperations.fetchAgeBegin();
    const expectedState = {
      ...initialState,
      loading: true,
      error: null
    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });
});


describe('ON Submitting the Filter details', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.ADD_TO_FILTERS_ARRAY,
      payload: {id: 5, name: 'age_group_ids'}
    };

    const expectedState = {
      ...initialState,
      filtersArray: [...initialState.filtersArray, action.payload]

    };

    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('Unticking a click box - returns the correct state ', () => {
    const action =
    {
      type: types.REMOVE_FILTERS_ARRAY,
      payload: {id: 5, name: 'age_group_ids'}
    };
    const expectedState = {
      ...initialState,
      filtersArray:  initialState.filtersArray.filter(item => item  !== action.payload)
    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  describe('On clicking the close and open button on the modal form', () => {
    test('returns the correct state ', () => {
      const action =
    {
      type: types.CLOSE_MODAL,
    };
      const expectedState = {
        ...initialState,
        modalOpen: false,
      };
      expect(uut(undefined, action)).toEqual(expectedState);
    });

    test('returns the correct state ', () => {
      const action =
    {
      type: types.OPEN_MODAL,
    };
      const expectedState = {
        ...initialState,
        modalOpen: true,
      };
      expect(uut(undefined, action)).toEqual(expectedState);
    });
  });
});





