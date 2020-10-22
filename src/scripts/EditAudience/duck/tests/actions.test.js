import Adapter from 'enzyme-adapter-react-16';
import { editAudienceOperations } from '../index';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const otherMockStore = configureMockStore(middlewares);
import { configure } from 'enzyme';
import HttpService from '../../../EditStudyDetails/duck/HttpService';

configure({ adapter: new Adapter() });


describe('EDIT STUDY ACTIONS', () => {

  it('fetches data correctly then dispatches the correct actions', () => {

    const initialState = {};
    const store = otherMockStore(initialState);
    HttpService.fetchAudienceDetails = jest.fn(() => Promise.resolve({ data: 1 }));

    return store.dispatch(editAudienceOperations.fetchAudienceDetails(6))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_AUDIENCE_BEGIN' },
          { type: 'FETCH_AUDIENCE_SUCCESS', payload: 1 },
        ]);
      });
  });

});


