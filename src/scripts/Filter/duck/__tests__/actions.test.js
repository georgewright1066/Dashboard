import configureStore from 'redux-mock-store';
// import fetchMock from 'fetch-mock';
import { filterOperations } from '../index';
import types from '../types';
const mockStore = configureStore();
const store = mockStore();
import thunk from 'redux-thunk';
const middlewares = [thunk];
const otherMockStore = configureStore(middlewares);


describe('select_actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  describe('When you click on a filter checkbox', () => {
    test('Dispatches the correct action and payload', () => {
      const initialState = { filter: { filtersArray: [] } };
      const store = otherMockStore(initialState);
      const expectedActions = [
        types.ADD_TO_FILTERS_ARRAY,
      ];
      return store.dispatch(filterOperations.submitFilterDetails({ id: 5, name: 'age_group_ids' }))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type);
          expect(actualActions).toEqual(expectedActions);
        });

    });
  });

  describe('Removes item if you click on a checked checkbox', () => {
    test('Dispatches the correct action and payload', () => {
      const initialState = { filter: { filtersArray: [{ id: 5, name: 'age_group_ids' }] } };
      const store = otherMockStore(initialState);
      const expectedActions = [
        types.REMOVE_FILTERS_ARRAY,
      ];
      return store.dispatch(filterOperations.submitFilterDetails({ id: 5, name: 'age_group_ids' }))
        .then(() => {
          const actualActions = store.getActions().map(action => action.type);
          expect(actualActions).toEqual(expectedActions);
        });

    });
  });

  describe('On pressing reset filters', () => {
    test('Dispatches the correct action and payload', () => {

      store.dispatch(filterOperations.clearFilters());
      const actions = store.getActions();
      const expectedPayload = {
        type: types.CLEAR_FILTERS
      };
      expect(actions).toEqual([expectedPayload]);
    });

  });

});

