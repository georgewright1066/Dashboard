
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
  batchStims: [],
  batchStimsLoading: true,
  batchStimsList: [],
  batchStimsListLoading: true,
  tableHeadings: [
    { name: "Name" },
    { name: "Batch Id" },
    { name: "Estimated Batch Size" },
    { name: "Live" },
    { name: "Completed" },
    { name: "Data Collection Start" },
    { name: "Data Collection End" },
    { name: "Report Generated" }
  ],
  batchesLoading: true,
  batchData: [],
  batchTableHeadings: [
    { name: "Identifier", tooltip: false },
    { name: "Name", tooltip: false },
    { name: "Type", tooltip: false },
    { name: "Width x Height", tooltip: false },
    { name: "Discovered Date", tooltip: false },
    { name: "AOI", tooltip: true, content: 'Define areas of interest.' }
  ],
  reportStatsLoading: true,
  reportStatsData: [],
  reportFeatureLoading: true,
  reportFeatureData: [],
  visualsLoading: true,
  batchGraphData: [],
  batchGraphLoading: true,
  searchTerm: '',
  stimType: undefined,
  searchByIdTerm: ''

}

describe('FETCH BATCH STIMS BEGIN', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_BATCH_STIMS_BEGIN,
    };

    const expectedState = {
      ...initialState,
      batchStimsLoading: true,
      error: null

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('BATCH_STIMS_SUCCESS returns correct state', () => {
    const action =

    {
      type: types.FETCH_BATCH_STIMS_SUCCESS,
      payload: [{ name: 'marcus' }]
    };

    const expectedState = {
      ...initialState,
      batchStimsLoading: false,
      batchStims: [{ name: 'marcus' }]

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test(' FETCH_BATCH_STIMS_ERROR returns the correct state', () => {
    const action =

    {
      type: types.FETCH_BATCH_STIMS_ERROR,
      payload: [{ error: 'marcus' }]
    };

    const expectedState = {
      ...initialState,
      batchStimsLoading: false,
      error: action.payload.error,

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('FETCH_BATCH_DATA_BEGIN returns the correct state', () => {
    const action =

    {
      type: types.FETCH_BATCH_DATA_BEGIN,
    };

    const expectedState = {
      ...initialState,
      batchesLoading: true,
      error: null

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('FETCH_BATCH_DATA_SUCCESS returns the correct state', () => {
    const action =

    {
      type: types.FETCH_BATCH_DATA_SUCCESS,
      payload: [{ data: 'marcus' }]
    };

    const expectedState = {
      ...initialState,
      batchesLoading: false,
      batchData: action.payload

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('FETCH_BATCH_DATA_ERROR returns the correct state', () => {
    const action =

    {
      type: types.FETCH_BATCH_DATA_ERROR,
      payload: [{ name: 'marcus' }]
    };

    const expectedState = {
      ...initialState,
      batchesLoading: false,
      error: action.payload.error,

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  })

  test('FETCH_REPORT_BEGIN returns the correct state', () => {
    const action =

    {
      type: types.FETCH_REPORT_BEGIN,
    };

    const expectedState = {
      ...initialState,
      reportLoading: true,
      error: null

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('FETCH_REPORT_SUCCESS returns the correct state', () => {
    const action =

    {
      type: types.FETCH_REPORT_SUCCESS,
      payload: [{ data: 'marcus' }]
    };

    const expectedState = {
      ...initialState,
      reportLoading: false,
      reportData: action.payload

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('FETCH_REPORT_ERROR returns the correct state', () => {
    const action =

    {
      type: types.FETCH_REPORT_ERROR,
      payload: [{ name: 'marcus' }]
    };

    const expectedState = {
      ...initialState,
      reportLoading: false,
      error: action.payload.error,

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  })

  test('FETCH_VISUALS_BEGIN returns the correct state', () => {
    const action =

    {
      type: types.FETCH_VISUALS_BEGIN,
    };

    const expectedState = {
      ...initialState,
      visualsLoading: true,
      error: null

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('FETCH_VISUALS_SUCCESSS returns the correct state', () => {
    const action =

    {
      type: types.FETCH_VISUALS_SUCCESSS,
      payload: [{ data: 'marcus' }]
    };

    const expectedState = {
      ...initialState,
      visualsLoading: false,
      visualsData: action.payload

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('FETCH_VISUALS_ERROR returns the correct state', () => {
    const action =

    {
      type: types.FETCH_VISUALS_ERROR,
      payload: [{ name: 'marcus' }]
    };

    const expectedState = {
      ...initialState,
      visualsLoading: false,
      error: action.payload.error,

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  })

  test('FETCH_REPORT_FEATURE_BEGIN returns the correct state', () => {
    const action =

    {
      type: types.FETCH_REPORT_FEATURE_BEGIN,
    };

    const expectedState = {
      ...initialState,
      reportFeatureLoading: true,
      error: null

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });


  test('FETCH_REPORT_FEATURE_ERROR returns the correct state', () => {
    const action =

    {
      type: types.FETCH_REPORT_FEATURE_ERROR,
      payload: [{ name: 'marcus' }]
    };

    const expectedState = {
      ...initialState,
      reportFeatureLoading: false,
      error: action.payload.error,

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  })

})







