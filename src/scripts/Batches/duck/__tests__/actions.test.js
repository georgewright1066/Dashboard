import Adapter from 'enzyme-adapter-react-16';
import { batchStimsOperations } from '../index';
import thunk from 'redux-thunk';
import DataService from '../../../common/services/dataService';
import BatchService from '../batchService';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const otherMockStore = configureMockStore(middlewares);
import { configure } from 'enzyme';


configure({ adapter: new Adapter() });


describe('BATCH STIMS ACTIONS', () => {

  it('fetches data correctly then dispatches the correct actions', async () => {

    const initialState = {}
    const store = otherMockStore(initialState);
    DataService.fetchBatchStimsData = jest.fn(() => Promise.resolve({ data: { data: 'payload from resolved promise' } }));

    return store.dispatch(batchStimsOperations.getBatchStimsData())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_BATCH_STIMS_BEGIN' },
          { type: 'FETCH_BATCH_STIMS_SUCCESS', payload: 'payload from resolved promise' }]
        );
      });
  });


  it('fetches data correctly then dispatches the correct actions for batchData', () => {

    const initialState = {}
    const store = otherMockStore(initialState);
    DataService.fetchBatchData = jest.fn(() => Promise.resolve({ data: { data: 'payload from resolved promise' } }));

    return store.dispatch(batchStimsOperations.getBatchesData())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_BATCH_DATA_BEGIN' },
          { type: 'FETCH_BATCH_DATA_SUCCESS', payload: 'payload from resolved promise' },
        ],

        );
      });
  });

  it('fetches data correctly then dispatches the correct actions for batchStimsData', () => {

    const initialState = {}
    const store = otherMockStore(initialState);
    DataService.fetchBatchStimsData = jest.fn(() => Promise.resolve({ data: { data: 'payload from resolved promise' } }));

    return store.dispatch(batchStimsOperations.getBatchStimsData())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_BATCH_STIMS_BEGIN' },
          { type: 'FETCH_BATCH_STIMS_SUCCESS', payload: 'payload from resolved promise' },
        ],

        );
      });
  });

  it('fetches data correctly then dispatches the correct actions for generateReport', () => {

    const initialState = {}
    const store = otherMockStore(initialState);
    BatchService.getReportVisual = jest.fn(() => Promise.resolve({ data: { data: 'payload from resolved promises' } }));
    DataService.fetchBatchStimsData = jest.fn(() => Promise.resolve({ data: { data: 'batch stims' } }));


    return store.dispatch(batchStimsOperations.generateReport({ batchId: 1, vendorId: 2 }))
      .then(() => {
        expect(store.getActions()).toEqual([

          { type: 'FETCH_VISUALS_BEGIN' },
          { type: 'FETCH_VISUALS_SUCCESSS', payload: { data: 'payload from resolved promises' } },
          { type: 'FETCH_BATCH_STIMS_BEGIN' },
          { type: 'FETCH_BATCH_STIMS_SUCCESS', payload: 'batch stims' },

        ],

        );
      });
  });

  it('fetches data correctly then dispatches the correct actions for onKpiClick', () => {

    const initialState = {}
    const store = otherMockStore(initialState);
    BatchService.getReportVisual = jest.fn(() => Promise.resolve({ data: { data: 'payload from resolved promise visual' } }));
    BatchService.getReportData = jest.fn(() => Promise.resolve({ data: { data: 'payload from resolved promise' } }));
    DataService.fetchBatchGraphData = jest.fn(() => Promise.resolve({ data: { data: 'payload from resolved promise Graph' } }));


    return store.dispatch(batchStimsOperations.onKpiClick(1, 2, 3, 4, 5))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_VISUALS_BEGIN' },
          { type: 'FETCH_REPORT_BEGIN' },
          { type: 'FETCH_BATCH_GRAPH_BEGIN' },
          { type: 'FETCH_REPORT_SUCCESS', payload: { data: 'payload from resolved promise' } },
          { type: 'FETCH_VISUALS_SUCCESSS', payload: { data: 'payload from resolved promise visual' } },
          { type: 'FETCH_BATCH_GRAPH_SUCCESS', payload: { data: { data: 'payload from resolved promise Graph' } } }

        ],

        );
      });
  });

});


describe('BATCH REPORT DOWNLOAD ACTIONS', () => {

  it('fetches data correctly then dispatches the correct actions', async () => {

    const initialState = {}
    const store = otherMockStore(initialState);
    DataService.fetchBatchStimsData = jest.fn(() => Promise.resolve({ data: { data: 'payload from resolved promise' } }));

    return store.dispatch(batchStimsOperations.getBatchStimsData())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_BATCH_STIMS_BEGIN' },
          { type: 'FETCH_BATCH_STIMS_SUCCESS', payload: 'payload from resolved promise' }]
        );
      });
  });

})


