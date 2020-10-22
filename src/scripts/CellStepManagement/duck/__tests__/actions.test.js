import Adapter from 'enzyme-adapter-react-16';
import { CellStepManagementOperations } from '../index';
import thunk from 'redux-thunk';
import DataService from '../../../common/services/dataService';
import Utils from '../../../common/utils/Utils';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const otherMockStore = configureMockStore(middlewares);
import { configure } from 'enzyme';
import stepMocks from './__mocks__/stepmocks.json';
import sortedStepData from './__mocks__/sortedStepData.json'
import csmService from '../DataService';

configure({ adapter: new Adapter() });


describe('CSM ACTIONS', () => {

  it('fetches data correctly then dispatches the correct actions', () => {

    const initialState = {
      cellStepManagement: {
        cellData: {
          columnOrder: [51],
          columns: [{ 51: { taskIds: [] } }],
          tasks: {},
        },
        rawCellData: { allow_step_editing: true }
      },
      data: {
        data: 'hello'
      }
    };
    const store = otherMockStore(initialState);
    DataService.fetchStepData = jest.fn(() => Promise.resolve(initialState));
    Utils.sortedTaskData = jest.fn(() => initialState);
    Utils.sortStepData = jest.fn(() => initialState);
    Utils.createSortedDataForDragAndDrop = jest.fn(() => stepMocks);

    const expectedResult = Utils.createSortedDataForDragAndDrop()

    return store.dispatch(CellStepManagementOperations.getStepData(6))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_STEP_BEGIN' },
          { type: 'FETCH_RAW_STEP_SUCCESS', payload: initialState.data },
          { type: 'FETCH_STEP_SUCCESS', payload: expectedResult }]
        );
      });
  });




  it('On drag end orrectly then dispatches the correct actions', () => {

    const initialState = {
      cellStepManagement: {
        cellData: {
          columnOrder: [51],
          columns: [{ 51: { taskIds: [] } }],
          tasks: {},
        },
        rawCellData: { allow_step_editing: true }
      },
      data: {
        data: 'hello'
      }
    };
    const store = otherMockStore(initialState);
    DataService.postStepReOrderData = jest.fn(() => Promise.resolve({}));
    DataService.fetchStepData = jest.fn(() => Promise.resolve(initialState));
    Utils.sortedTaskData = jest.fn(() => initialState);
    Utils.sortStepData = jest.fn(() => initialState);
    Utils.createSortedDataForDragAndDrop = jest.fn(() => initialState);
    const expectedResult = Utils.createSortedDataForDragAndDrop()
    Utils.sortReOrderDataForApi = jest.fn(() => initialState);


    return store.dispatch(CellStepManagementOperations.onDragEnd({
      'draggableId': 317,
      'type': 'DEFAULT',
      'source': {
        'index': 1,
        'droppableId': '51'
      },
      'mode': 'FLUID',
      'destination': {
        'droppableId': '51',
        'index': 2
      },
      'combine': null,
      'reason': 'DROP'
    }

    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_STEP_SUCCESS', payload: expectedResult },
          { type: 'SAVED' },
        ]);
      });
  });


  it('Add a step to the cell', () => {

    const initialState = {
      cellStepManagement: {
        cellData: {
          columnOrder: [51],
          columns: [{ 51: { taskIds: [] } }],
          tasks: {},
        },
        rawCellData: { allow_step_editing: true }
      },
      data: {
        data: 'hello'
      }
    };
    const store = otherMockStore(initialState);
    DataService.postStepReOrderData = jest.fn(() => Promise.resolve({}));
    DataService.postNewStepDataToApi = jest.fn(() => Promise.resolve({}));
    Utils.sortedTaskData = jest.fn();
    Utils.sortStepData = jest.fn();
    Utils.createSortedDataForDragAndDrop = jest.fn(() => initialState);
    Utils.sortReOrderDataForApi = jest.fn(() => initialState);


    return store.dispatch(CellStepManagementOperations.addTask(
      51, 'Web Viewpoints - Elevator Calibration Instruction Page:24', 50, 'Instruction', null
    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'ADD_NEW_ITEM_COMPLETE' },
          { type: 'SAVED' },
          { type: 'FETCH_STEP_SUCCESS', payload: initialState },
        ]);
      });
  });

  it('Edit task dispatches the correct action', () => {

    const initialState = {
      cellStepManagement: {
        cellData: {
          columnOrder: [51],
          columns: { 51: { id: 51, taskIds: [], cellName: '12312', shortName: 'sfasafsaf' } },
          tasks: {},
        },
        rawCellData: { allow_step_editing: true }
      },
      data: {
        data: 'hello'
      }
    };

    const newState = {
      cellStepManagement: {
        cellData: {
          columnOrder: [51],
          columns: { 51: { id: 51, taskIds: [], cellName: 'hello', shortName: 'sfasafsaf' } },
          tasks: {},
        },
        rawCellData: { allow_step_editing: true }
      }
    };

    const api = { data: { data: 'hello' } }


    const store = otherMockStore(initialState);
    DataService.editTask = jest.fn(() => Promise.resolve({}));
    Utils.sortedTaskData = jest.fn();
    Utils.sortStepData = jest.fn();
    Utils.sortReOrderDataForApi = jest.fn(() => newState);
    Utils.createSortedDataForDragAndDrop = jest.fn(() => stepMocks);
    const expectedResult = Utils.createSortedDataForDragAndDrop()

    return store.dispatch(CellStepManagementOperations.editTask(
      51, 'hello', 'TITLE', '50'
    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'EDIT_TASK_BEGIN' },
          { type: 'FETCH_STEP_BEGIN' },
          { type: 'EDIT_TASK_SUCCESS', payload: 'Your Names have been updated' },
          { type: 'FETCH_RAW_STEP_SUCCESS', payload: initialState.data },
          {
            type: 'FETCH_STEP_SUCCESS', payload: expectedResult
          }
        ]);
      });
  });



  it('On select item dispatches the correct action', () => {

    const initialState = {
      data: { data: [1] }
    };

    const store = otherMockStore(initialState);
    DataService.getStepDetailInfo = jest.fn(() => Promise.resolve(initialState));
    csmService.createSortedItems = jest.fn(() => Promise.resolve(initialState));
    Utils.createSortedItems = jest.fn(() => Promise.resolve({ data: [{ media: 'video', type: 'mpu' }] }));

    return store.dispatch(CellStepManagementOperations.onSelectItem(
        'External', 50
    ))
        .then(() => {
          expect(store.getActions()).toEqual([
            { type: 'STEP_TYPE', payload: 'external' },

            { type: 'ON_DROPDOWN_SELECT', payload: 'text' },
            { type: 'POPULATE_FORM_DROPDOWN', payload: [1] },

          ]);
        });
  });

  it('On select item dispatches the correct action', () => {

    const initialState = {
      data: { data: [1] }
    };

    const store = otherMockStore(initialState);
    DataService.getStepDetailInfo = jest.fn(() => Promise.resolve(initialState));
    Utils.createSortedItems = jest.fn(() => Promise.resolve({ data: [{ media: 'video', type: 'mpu' }] }));

    return store.dispatch(CellStepManagementOperations.onSelectItem(
      'Instruction', 50
    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'STEP_TYPE', payload: 'instruction' },
          { type: 'ON_DROPDOWN_SELECT', payload: 'dropdown' },
          { type: 'POPULATE_FORM_DROPDOWN', payload: [1] },

        ]);
      });
  });

  it('On select Cache Page dispatches the correct action', () => {

    const initialState = {
      data: { data: [1] }
    };

    const store = otherMockStore(initialState);
    DataService.getStepDetailInfo = jest.fn(() => Promise.resolve(initialState));
    csmService.createSortedItems = jest.fn(() => Promise.resolve(initialState));
    Utils.createSortedItems = jest.fn(() => Promise.resolve({ data: [{ media: 'video', type: 'mpu' }] }));

    return store.dispatch(CellStepManagementOperations.onSelectItem(
      'Cache Page', 50
    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'STEP_TYPE', payload: 'cache' },

          { type: 'ON_DROPDOWN_SELECT', payload: 'text' },
          { type: 'POPULATE_FORM_DROPDOWN', payload: [1] },

        ]);
      });
  });

  it('On select Stim dispatches the correct action', () => {

    const initialState = {
      data: { data: [1] }
    };

    const store = otherMockStore(initialState);
    DataService.getStepDetailInfo = jest.fn(() => Promise.resolve(initialState));
    csmService.createSortedItems = jest.fn(() => Promise.resolve(initialState));
    Utils.createSortedItems = jest.fn(() => Promise.resolve({ data: [{ media: 'video', type: 'mpu' }] }));


    return store.dispatch(CellStepManagementOperations.onSelectItem(
      'Stim', 50
    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'STEP_TYPE', payload: 'stim' },
          { type: 'ON_DROPDOWN_SELECT', payload: 'text' },
          { type: 'POPULATE_FORM_DROPDOWN', payload: { data: [{ media: 'video', type: 'mpu' }] } },

        ]);
      });
  });

  it('On toggle lock study dispatches the correct action', () => {

    const initialState = { data: { data: 'hello' } }

    const store = otherMockStore(initialState);
    DataService.unlockStudy = jest.fn(() => Promise.resolve({}));
    DataService.fetchStepData = jest.fn(() => Promise.resolve(initialState));
    Utils.sortedTaskData = jest.fn(() => initialState);
    Utils.sortStepData = jest.fn(() => initialState);
    Utils.createSortedDataForDragAndDrop = jest.fn(() => stepMocks);
    const expectedResult = Utils.createSortedDataForDragAndDrop()

    return store.dispatch(CellStepManagementOperations.toggleLockStudy(10,
      true
    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_STEP_BEGIN' },
          { type: 'ON_TOGGLE_LOCK_STUDY', locked: true },
          { type: 'FETCH_RAW_STEP_SUCCESS', payload: initialState.data },
          { type: 'FETCH_STEP_SUCCESS', payload: expectedResult },

        ]);
      });
  })
})