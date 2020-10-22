
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
  audienceLoading: true,
  error: null,
  audienceOverviewError: null,
  audienceOverview: {},
  overviewData: {},
  overviewLoading: true,
  modalOpen: false,
  panelOverview: {},
  panelLoading: true,
  confirmationModalOpen: false,
  deleteId: null,
  filesModalOpen: false,
  filesData: []
};

describe('FETCH AUIDENCE OVERVIEW BEGIN', () => {
  test('returns the correct state', () => {
    const action =

    {
      type: types.FETCH_AUDIENCE_OVERVIEW_BEGIN,
    };

    const expectedState = {
      ...initialState,
      audienceLoading: true,
      error: null

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('returns the correct state when Audience overview success is distpatched', () => {
    const action =

    {
      type: types.FETCH_AUDIENCE_OVERVIEW_SUCCESS,
      payload: { data: 'test' }
    };

    const expectedState = {
      ...initialState,
      audienceLoading: false,
      audienceOverview: { data: 'test' }

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('returns the correct state for Overview', () => {
    const action =

    {
      type: types.FETCH_OVERVIEW_BEGIN,
    };

    const expectedState = {
      ...initialState,
      overviewLoading: true,
      error: null

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });

  test('returns the correct state for Overview Begin', () => {
    const action =

    {
      type: types.FETCH_OVERVIEW_SUCCESS,
      payload: { data: 'test' }
    };

    const expectedState = {
      ...initialState,
      overviewLoading: false,
      overviewData: { data: 'test' }

    };
    expect(uut(undefined, action)).toEqual(expectedState);
  });


});





