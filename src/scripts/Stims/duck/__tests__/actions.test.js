import Adapter from 'enzyme-adapter-react-16';
import { stimsOperations } from '../index';
import thunk from 'redux-thunk';
import DataService from '../../../common/services/dataService';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const otherMockStore = configureMockStore(middlewares);
import { configure } from 'enzyme';
import HttpService from '../../../Dashboard/duck/HttpService';


configure({ adapter: new Adapter() });


describe('STIMS ACTIONS', () => {

  it('fetches data correctly then dispatches the correct actions', async () => {

    const initialState = {}
    const store = otherMockStore(initialState);
    DataService.fetchStimsData = jest.fn(() => Promise.resolve({ data: 'payload from resolved promise' }));
    HttpService.getEnvironmentList = jest.fn(() => Promise.resolve({ data: [1, 2] }));
    HttpService.getMediaList = jest.fn(() => Promise.resolve({ data: [1, 2, 3] }));
    HttpService.getStudyTypesList = jest.fn(() => Promise.resolve({ data: [1, 2, 4] }));
    return store.dispatch(stimsOperations.getStimsData())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_STIMS_BEGIN' },
          { type: 'GET_TYPES_BEGIN' },
          {
            type: 'FETCH_STIMS_SUCCESS',
            payload: 'payload from resolved promise'

          }



        ]
        );
      });
  });

});


// { type: 'GET_TYPES_BEGIN' },
// {
//   type: 'GET_TYPES_SUCCESS',
//   environmentTypes: [1, 2],
//   mediaTypes: [1, 2, 3],
//   studyTypes: [1, 2, 4]
// }