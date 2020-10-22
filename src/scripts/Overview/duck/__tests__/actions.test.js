import Adapter from 'enzyme-adapter-react-16';
import { overviewOperations } from '../index';
import thunk from 'redux-thunk';
import DataService from '../../../common/services/dataService';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const otherMockStore = configureMockStore(middlewares);
import { configure } from 'enzyme';
import types from '../types';


configure({ adapter: new Adapter() });


describe('FETCH AUDIENCE OVERVIEW', () => {

  it('fetches data correctly then dispatches the correct actions', async () => {

    const initialState = {}
    const store = otherMockStore(initialState);
    DataService.fetchAudienceOverviewData = jest.fn(() => Promise.resolve({ data: 'payload from resolved promise' }));
    DataService.getLinksData = jest.fn(() => Promise.resolve({ data: 'links' }));

    return store.dispatch(overviewOperations.getAudienceOverviewData(5))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: types.FETCH_AUDIENCE_OVERVIEW_BEGIN },
          { type: types.FETCH_AUDIENCE_OVERVIEW_SUCCESS, payload: 'payload from resolved promise' },


        ])
      });
  });

  it('fetches data correctly then dispatches the correct actions for Overview', () => {

    const initialState = {}
    const store = otherMockStore(initialState);
    DataService.fetchOverviewData = jest.fn(() => Promise.resolve(
      {
        data: {
          columnOrder: [],
          columns: []
        },

      }));

    return store.dispatch(overviewOperations.getOverviewData(6))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: types.FETCH_OVERVIEW_BEGIN },
          {
            type: types.FETCH_OVERVIEW_SUCCESS, payload: {
              columnOrder: [],
              columns: []
            }
          }
        ],

        );
      });
  });

  it('fetches data correctly then dispatches the correct actions for Creatng an Panel', () => {

    const initialState = {}
    const store = otherMockStore(initialState);
    DataService.fetchOverviewData = jest.fn(() => Promise.resolve({ data: 'payload from resolved promise' }));
    DataService.createPanel = jest.fn(() => Promise.resolve({ data: 'payload from resolved promise' }));
    DataService.getLinksData = jest.fn(() => Promise.resolve({ data: 'payload from resolved promise' }));

    return store.dispatch(overviewOperations.createPanel(6, { data: 'some studd' }))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: types.CREATE_PANEL_SUCCESS },
          { type: types.FETCH_OVERVIEW_BEGIN },
          { type: 'FETCH_LINKS_BEGIN' },
          { type: types.FETCH_OVERVIEW_SUCCESS, payload: 'payload from resolved promise' },
          { type: 'FETCH_LINKS_SUCCESS', payload: 'payload from resolved promise' }

        ],

        );
      });
  });

  it('fetches data correctly then dispatches the correct actions for Deleting an Panel', () => {
    const initialState = {}
    const store = otherMockStore(initialState);
    DataService.deletePanel = jest.fn(() => Promise.resolve({ data: 'payload from resolved promise' }));
    DataService.fetchOverviewData = jest.fn(() => Promise.resolve({ data: 'payload from resolved promise' }));
    DataService.getLinksData = jest.fn(() => Promise.resolve({ data: 'payload from resolved promise' }));

    return store.dispatch(overviewOperations.onDeleteClick(6, 4))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: types.DELETE_SUCCESS },
          { type: 'FETCH_LINKS_BEGIN' },
          { type: types.FETCH_OVERVIEW_BEGIN },
          { type: 'FETCH_LINKS_SUCCESS', payload: 'payload from resolved promise' },
          { type: types.FETCH_OVERVIEW_SUCCESS, payload: 'payload from resolved promise' },


        ],

        );
      });
  });






})



