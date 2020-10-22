import Utils from '../../../common/utils/Utils';
import { CellStepManagementOperations } from '../index';
import sortedStep from './__mocks__/sortedStepData.json';
import sortedTask from './__mocks__/sortedTask.json';
import mocks from './__mocks__/mocks.json';

describe('seperateIdAndValue', () => {
  test('seperateIdAndValue(Oct18 JS ViewPoints - Pre-exposure Generic Instructions : 458)', () => {
    const result = CellStepManagementOperations.seperateIdAndValue('Oct18 JS ViewPoints - Pre-exposure Generic Instructions:458');
    expect(result).toEqual({ step_id: 458, value: 'Oct18 JS ViewPoints - Pre-exposure Generic Instructions' });
  });
});

describe('seperateIdAndValue', () => {
  test('sortedStepData(data)', () => {
    const result = Utils.sortStepData(mocks.data.data);
    expect(result).toEqual(sortedStep);
  });
});


describe('Sorted Task Data', () => {
  test('sortedTask(data)', () => {
    const result = Utils.sortedTaskData(mocks.data.data);
    expect(result).toEqual(sortedTask);
  });
});

