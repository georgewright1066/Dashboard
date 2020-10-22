import csmService from '../../CellStepManagement/duck/DataService';

const Utils = {
  Capitalize: (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  },

  DelimitNumbers: (str) => {
    return (str + '').replace(/\b(\d+)((\.\d+)*)\b/g, function (a, b, c) {
      return (b.charAt(0) > 0 && !(c || '.').lastIndexOf('.') ? b.replace(/(\d)(?=(\d{3})+$)/g, '$1,') : b) + c;
    });
  },


  FormatDataSet: (data) => {
    return Object.keys(data).forEach(key => {
      data[key] = data[key].map(item => item.id);
    });
  },

  ConvertArrayOfObjectsToCSV: (args) => {
    let result, ctr, keys, columnDelimiter, lineDelimiter, data;
    // data = type === 'graph'? args.data.data[0].graph_data : args.response || null;
    // data = ;
    data = args;

    if (data == null || !data.length) {
      return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\r\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function (item) {
      ctr = 0;
      keys.forEach(function (key) {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });
    // console.log(result);
    var csv = Utils.DownloadCSV(result);
    return csv;
  },

  DownloadCSV: (csv) => {
    if (csv == null) return;

    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    return csv
  },

  GroupByCategory: (objectArray, property) => {
    return objectArray.reduce((acc, obj) => {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  },

  AddThreeDotsIfOver30Characters: (value) => {
    let result = value;
    if (value.length > 40) {
      result = value.slice(0, 40) + '...';
    }
    return result;
  },
  sortedTaskData: (data) => {
    return data.map(item => {
      return item.step_data.map(item2 => {
        const obj = {};
        obj[item2.step_order_id] = item2;
        return obj;
      });
    }).reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []).reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
  },
  sortStepData: (data) => {
    return data.map(item => {
      const obj = {};
      item[item.cell_id] =
        obj[item.cell_id] = {
          id: item.cell_id,
          taskIds: item.step_data,
          cellName: item.cell_name,
          shortName: item.short_name
        };
      return obj;
    }).reduce((acc, curr) => {
      return { ...acc, ...curr };

    }, {});
  },
  createSortedDataForDragAndDrop: (sortedTask, sortedStepData) => {
    return {
      tasks: { ...sortedTask },
      columns: { ...sortedStepData },
      columnOrder: Object.keys(sortedStepData).map(key => sortedStepData[key].id)
    };
  },

  sortReOrderDataForApi: (start, finish, tasks, source, destination, draggableId) => {
    const newTaskIds = Array.from(start.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, tasks[draggableId]);
    const newColumn = {
      ...start,
      taskIds: newTaskIds
    };

    const newCellOrder = newColumn.taskIds.map((item, index) => {
      return { index: index, step_order_id: item.step_order_id };
    });
    const data = {};
    data[newColumn.id] = newCellOrder;
    return data;

  },

  createSortedItems: async (data) => {
    const mediaList = await csmService.getMediaTypes();
    const adList = await csmService.getAdTypes();
    const stimList = await csmService.getStimTypes();
    const newDataObject = data.data.map((item, index) => {
      const code = Utils.getCode(mediaList, 'media', item)
      const adCode = Utils.getCode(adList, 'adtype', item)
      const stimCode = Utils.getCode(stimList, 'type', item)
      return { ...item, media: code.description, adtype: adCode.description, type: stimCode.description }
    })
    return newDataObject
  },

  getCode: (array, type, item1) => {
    let result = array.data.find(item => item.code === item1[type]);
    if (result === undefined) {
      result = { description: '' }
    }
    return result

  },
  isHeightGreaterThanWidth: (data, property1, property2) => {
    const height = data[property1];
    const width = data[property2];
    return height > width ? true : false;
  },
  createDownloadLink: (download, name) => {
    if (download === null) {
      alert('No Data to download')
    } else {
      const encodedUri = encodeURI(download);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `${name}.csv`);
      document.body.appendChild(link); // Required for FF
      link.click();
    }
  },
  FlattenObject: (ob) => {
    let toReturn = {};

    for (let i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if ((typeof ob[i]) == 'object') {
        let flatObject = Utils.FlattenObject(ob[i]);
        for (let x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;

          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  }
};

export default Utils;


