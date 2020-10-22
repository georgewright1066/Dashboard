import Utils from '../utils/Utils';
import csmService from '../../CellStepManagement/duck/DataService';

describe('Capitalize', () => {
  test('Utils.Capitalize(hello)', () => {
    const result = Utils.Capitalize('hello');
    expect(result).toEqual('Hello');
  });

});

describe('Delimit Numbers', () => {
  test('Utils.DelimitNumbers(1000)', () => {
    const result = Utils.DelimitNumbers('1000');
    expect(result).toEqual('1,000');
  });

  test('Utils.DelimitNumbers(10000)', () => {
    const result = Utils.DelimitNumbers('10000');
    expect(result).toEqual('10,000');
  });

  test('Utils.DelimitNumbers(100000)', () => {
    const result = Utils.DelimitNumbers('100000');
    expect(result).toEqual('100,000');
  });

  test('Utils.DelimitNumbers(1)', () => {
    const result = Utils.DelimitNumbers('1');
    expect(result).toEqual('1');
  });
});


describe('Utils.GroupByCategry(hello)', () => {
  test('Utils.GroupByCategory(data)', () => {
    let data = [{ name: 'marcus' }, { name: 'marcus' }, { name: 'dave' }]
    const result = Utils.GroupByCategory(data, 'name');

    let expectedResult = { "dave": [{ "name": "dave" }], "marcus": [{ "name": "marcus" }, { "name": "marcus" }] }
    expect(result).toEqual(expectedResult);
  });

  test('Utils.GroupByCategory(data)', () => {
    let data = [{ name: 'marcus', type: 'h' }, { name: 'marcus', type: 'a' }, { name: 'dave' }]
    const result = Utils.GroupByCategory(data, 'name');

    let expectedResult = { "dave": [{ "name": "dave" }], "marcus": [{ "name": "marcus", type: 'h' }, { "name": "marcus", type: 'a' }] }
    expect(result).toEqual(expectedResult);
  });

  test('Utils.GroupByCategory(data)', () => {
    let data = [{ name: 'marcus', type: 'h' }, { name: 'marcus', type: 'a' }, { name: 'dave' }]
    const result = Utils.GroupByCategory(data, 'name');

    let expectedResult = { "dave": [{ "name": "dave" }], "marcus": [{ "name": "marcus", type: 'h' }, { "name": "marcus", type: 'a' }] }
    expect(result).toEqual(expectedResult);
  });

});

describe('Utils.getVode(hello)', () => {
  test('Utils.getCode(mediaList)', () => {
    const mediaList = { data: [{ code: 1, description: 'TV' }, { code: 2, description: 'Press' }] }
    const item = {
      media: 1,
      adtype: "dmpu",
      type: "v",

    }
    const result = Utils.getCode(mediaList, 'media', item);
    const expectedResult = { code: 1, description: "TV" }
    expect(result).toEqual(expectedResult);
  });

  test('Utils.getCode(stimList)', () => {
    const stimList = { data: [{ code: 'i', description: 'image' }, { code: 'v', description: 'video' }] }
    const item = {
      media: 1,
      adtype: "dmpu",
      type: "v",

    }
    const result = Utils.getCode(stimList, 'type', item);
    const expectedResult = { code: 'v', description: "video" }
    expect(result).toEqual(expectedResult);
  });

  test('Utils.getCode(adList)', () => {
    const adList = {
      data: [{
        description: "Catch all for unknown",
        code: "other",
      },
      {
        description: "Standard MPU",
        code: "mpu",
      }]
    }
    const item = {
      media: 1,
      adtype: "mpu",
      type: "v",
    }

    const result = Utils.getCode(adList, 'adtype', item);

    const expectedResult = { code: 'mpu', description: "Standard MPU" }
    expect(result).toEqual(expectedResult);
  });
})


describe('Utils.createSortedItem(hello)', () => {
  test('Utils.createSortedItems(data)', () => {
    let data = { data: [{ media: 'v', adtype: 'mpu', type: '1' }, { media: 'i', adtype: 'dmpu', type: '2' }] }
    const result = Utils.createSortedItems(data)
    var z = result.then((response) => {
      return response
    });
    csmService.getMediaTypes = jest.fn(() => Promise.resolve(
      {
        data: [

          { code: 'v', description: 'video' }
          ,

          { code: 'i', description: 'image' }
          ,

        ]
      }


    ));

    csmService.getAdTypes = jest.fn(() => Promise.resolve(

      {
        data: [

          { code: 'mpu', description: 'This is an MPU' },

          { code: 'dmpu', description: 'Double MPU' }

        ]
      }

    ));

    csmService.getStimTypes = jest.fn(() => Promise.resolve(
      {
        data: [

          { code: '1', description: 'Digital' }
          ,

          { code: '2', description: 'Something' }
          ,

        ]
      }
    ));

    csmService.getMediaTypes()
    csmService.getAdTypes()
    csmService.getStimTypes()

    const media = { code: 'v', description: 'video' }
    const ad = { code: 'mpu', description: 'This is an MPU' }
    const stim = { code: '1', description: 'Digital' }

    Utils.getCode = jest
      .fn()
      .mockImplementationOnce(() => media)
      .mockImplementationOnce(() => ad)
      .mockImplementationOnce(() => stim)


    const code = Utils.getCode()
    const adCode = Utils.getCode()
    const stimCode = Utils.getCode()
    let expectedResult = [{ media: 'video', adtype: 'This is an MPU', type: 'Digital' }, { media: 'image', adtype: 'Double MPU', type: 'Something' }]
    // expect(result).toEqual(expectedResult);

  });
})






