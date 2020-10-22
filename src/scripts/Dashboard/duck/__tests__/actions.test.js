import configureStore from 'redux-mock-store';
// import fetchMock from 'fetch-mock';
import { dashboardOperations } from '../index';
import types from '../types';
import DataService from '../../../common/services/dataService';
const mockStore = configureStore();
const store = mockStore();
import thunk from 'redux-thunk';
const middlewares = [thunk];
const otherMockStore = configureStore(middlewares);

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

describe('select_actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  describe('select Media Filter Action', () => {
    test('Dispatches the correct action and payload', () => {


      store.dispatch(dashboardOperations.setMediaFilter('Press'));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe('select Environment Filter Action', () => {
    test('Dispatches the correct action and payload', () => {

      store.dispatch(dashboardOperations.setEnvironmentFilter('Webcam'));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe('select Ascending or Decending button click', () => {
    test('Dispatches the correct action and payload', () => {

      store.dispatch(dashboardOperations.sortByAscendingOrder('name', 'ASCENDING'));
      const actions = store.getActions();
      const expectedPayload = {
        ascOrDec: 'ASCENDING',
        item: 'name',
        type: types.SORT_BY_ASCENDING_ORDER
      };
      expect(actions).toEqual([expectedPayload]);

    });

  });

  describe('select Decending button click', () => {
    test('Dispatches the correct action and payload', () => {

      store.dispatch(dashboardOperations.sortByDecendingOrder('name', 'DECENDING'));
      const actions = store.getActions();
      const expectedPayload = {
        ascOrDec: 'DECENDING',
        item: 'name',
        type: types.SORT_BY_DECENDING_ORDER
      };
      expect(actions).toEqual([expectedPayload]);

    });

  });

  describe('On Completed Checkbox action clicked', () => {
    test('Dispatches the correct action and payload', () => {

      store.dispatch(dashboardOperations.toggleCompleted());
      const actions = store.getActions();
      const expectedPayload = {
        type: types.COMPLETED,
      };
      expect(actions).toEqual([expectedPayload]);

    });

  });

  describe('On Live Checkbox action clicked', () => {
    test('Dispatches the correct action and payload', () => {

      store.dispatch(dashboardOperations.toggleLive());
      const actions = store.getActions();
      const expectedPayload = {
        type: types.IS_LIVE,
      };
      expect(actions).toEqual([expectedPayload]);

    });

  });

});

