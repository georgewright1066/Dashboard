import Adapter from 'enzyme-adapter-react-16';
import { editStudyDetailsOperations } from './index';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const otherMockStore = configureMockStore(middlewares);
import { configure } from 'enzyme';
import HttpService from './HttpService';

configure({ adapter: new Adapter() });


describe('EDIT STUDY ACTIONS', () => {

  it('fetches data correctly then dispatches the correct actions', () => {

    const initialState = {};
    const store = otherMockStore(initialState);
    HttpService.getStudyDetails = jest.fn(() => Promise.resolve({}));

    return store.dispatch(editStudyDetailsOperations.fetchStudyDetails(6))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_STUDY_DETAILS_BEGIN' },
          { type: 'FETCH_STUDY_DETAILS_SUCCESS', payload: {} },
        ]);
      });
  });

  it('fetches data correctly then dispatches the correct actions', () => {

    const initialState = {};
    const store = otherMockStore(initialState);
    HttpService.getEnvironmentList = jest.fn(() => Promise.resolve({}));

    return store.dispatch(editStudyDetailsOperations.fetchEnvironmentTypes(6))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_ENVIRONMENT_BEGIN' },
          { type: 'FETCH_ENVIRONMENT_SUCCESS', payload: {} },
        ]);
      });
  });

  it('fetches data correctly then dispatches the correct actions', () => {

    const initialState = {};
    const store = otherMockStore(initialState);
    HttpService.getMediaList = jest.fn(() => Promise.resolve({}));

    return store.dispatch(editStudyDetailsOperations.fetchMediaTypes(6))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_MEDIA_BEGIN' },
          { type: 'FETCH_MEDIA_SUCCESS', payload: {} },
        ]);
      });
  });

});


