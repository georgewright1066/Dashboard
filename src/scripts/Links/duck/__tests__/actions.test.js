import { CellStepManagementOperations, LinksOperations } from '../index';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';

import DataService from '../../../common/services/dataService';
import types from '../types';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const otherMockStore = configureMockStore(middlewares);
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });


describe('Links', () => {

  it('fetches data correctly then dispatches the correct actions when you get the links data ', () => {

    const initialState = { data: { data: 'hello' } }
    const store = otherMockStore(initialState);
    DataService.getLinksData = jest.fn(() => Promise.resolve(initialState));
    return store.dispatch(LinksOperations.getLinksData(6))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: types.FETCH_LINKS_BEGIN },
          { type: types.FETCH_LINKS_SUCCESS, payload: initialState.data },
        ]);
      });
  })
});

