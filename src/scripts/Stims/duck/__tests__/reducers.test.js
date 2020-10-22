
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
  stims: [],
  loading: true,
  tableHeadings: [
    { name: "Name", tooltip: false },
    { name: "Media", tooltip: false },
    { name: "Brand", tooltip: false },
    { name: "Width", tooltip: false },
    { name: "Height", tooltip: false },
    { name: "Id", tooltip: false },
    { name: "Type", tooltip: false },
    { name: "AOI", tooltip: true, content: 'Define areas of interest.' }],
  filterValue: '',
  environmentTypes: [],
  mediaTypes: [],
  stimTypes: [],
  languageTypes: [],
  currentSort: 'search',
  typesLoading: true,
  media: 'All',
  stimType: 'All',
  sortType: 'DECENDING',

};

describe('FETCH STIMS BEGIN', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_STIMS_BEGIN,
    };

    const expectedState = {
      ...initialState,
      loading: true,
      error: null



    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });
});






