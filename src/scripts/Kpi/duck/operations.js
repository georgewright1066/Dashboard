import Creators from './actions';
import DataService from '../../common/services/dataService';
import Utils from '../../common/utils/Utils';
const fetchKpiBegin = Creators.fetchKpiBegin
const fetchKpiSuccess = Creators.fetchKpiSuccess
const fetchKpiError = Creators.fetchKpiError;
const setKpiFilter = Creators.setKpiFilter;
const fetchKpiGraphBegin = Creators.fetchKpiGraphBegin;
const fetchKpiGraphSuccess = Creators.fetchKpiGraphSuccess;
const fetchKpiGraphError = Creators.fetchKpiGraphError

const fetchKpiRawBegin = Creators.fetchKpiRawBegin
const fetchKpiRawSuccess = Creators.fetchKpiRawSuccess
const fetchKpiRawError = Creators.fetchKpiRawError;
const fetchParticipantReportBegin = Creators.fetchParticipantReportBegin;
const fetchParticipantReportSuccess = Creators.fetchParticipantReportSuccess;
const fetchParticipantReportError = Creators.fetchParticipantReportError;

const fetchKpiData = ({ studyId, cellId, stepId, stimId }) => {
  return async (dispatch, getState) => {
    const filter = getState().filter.filtersArray;

    let filterData =
      Utils.GroupByCategory(filter, 'name');
    Utils.FormatDataSet(filterData);
    try {
      dispatch(fetchKpiBegin());
      dispatch(getParticipantReportData(studyId, cellId, stepId));
      const res = await DataService.fetchKpiData(studyId, cellId, stepId, stimId, filterData);
      dispatch(fetchKpiSuccess(res.data))

    }
    catch (error) {
      dispatch(fetchKpiError({ error: 'Somethign went wrong' }))


    }
  }
}

const getParticipantReportData = (studyId, cellId, stepId, download) => {

  return async (dispatch) => {
    try {
      dispatch(fetchParticipantReportBegin());
      const participantRes = await DataService.getParticipantReport(studyId, cellId, stepId);
      if (download === 'DOWNLOAD') {
        const flattenendObjArray = participantRes.data.data.map(item => Utils.FlattenObject(item))
        const download = Utils.ConvertArrayOfObjectsToCSV(flattenendObjArray)

        Utils.createDownloadLink(download, 'participant-data');

      } else {
        dispatch(fetchParticipantReportSuccess(participantRes.data))

      }

    }
    catch (error) {
      dispatch(fetchParticipantReportError({ error: 'Somethign went wrong' }))

      throw error
    }
  }

}

const fetchKpiGraphData = ({ studyId, cellId, stepId, stimId }) => {

  return async (dispatch, getState) => {
    const filter = getState().filter.filtersArray;
    let filterData =
      Utils.GroupByCategory(filter, 'name');
    Utils.FormatDataSet(filterData);
    try {
      dispatch(fetchKpiGraphBegin());

      const graphRes = await DataService.fetchKpiGraphData(studyId, cellId, stepId, stimId);
      dispatch(fetchKpiGraphSuccess(graphRes))

    }
    catch (error) {
      dispatch(fetchKpiGraphError(error))

    }
  }
}

const fetchKpiRawData = (studyId, cellId, stepId, stimId, download) => {
  return async (dispatch, getState) => {
    const filter = getState().filter.filtersArray;

    let filterData =
      Utils.GroupByCategory(filter, 'name');
    Utils.FormatDataSet(filterData);
    try {
      dispatch(fetchKpiRawBegin());
      const rawData = await DataService.fetchKpiRawData(studyId, cellId, stepId, stimId);
      if (download === 'DOWNLOAD') {
        const flattenendObjArray = rawData.data.data.map(item => Utils.FlattenObject(item))
        const download = Utils.ConvertArrayOfObjectsToCSV(flattenendObjArray)
        Utils.createDownloadLink(download, 'stim-data');

      } else {
        dispatch(fetchKpiRawSuccess(rawData))
      }

    }
    catch (error) {
      dispatch(fetchKpiRawError(error))

    }
  }
}


// const downloadStepData = (studyId, cellId, stepId, download) => {

//   return async (dispatch) => {
//     try {
//       dispatch(fetchParticipantReportBegin());
//       const participantRes = await DataService.getParticipantReport(studyId, cellId, stepId);
//       if (download === 'DOWNLOAD') {
//         const download = Utils.ConvertArrayOfObjectsToCSV(participantRes.data.data)
//         if (download === null) {
//           alert('No Data to download')
//         } else {
//           const encodedUri = encodeURI(download);
//           const link = document.createElement("a");
//           link.setAttribute("href", encodedUri);
//           link.setAttribute("download", "Step-data.csv");
//           document.body.appendChild(link); // Required for FF
//           link.click();
//         }
//       } else {
//         dispatch(fetchParticipantReportSuccess(participantRes.data))

//       }

//     }
//     catch (error) {
//       dispatch(fetchParticipantReportError({ error: 'Somethign went wrong' }))

//       throw error
//     }
//   }

// }


export default {
  fetchKpiBegin,
  fetchKpiSuccess,
  fetchKpiError,
  setKpiFilter,
  fetchKpiData,
  fetchKpiGraphBegin,
  fetchKpiGraphSuccess,
  fetchKpiGraphError,
  fetchKpiGraphData,
  fetchKpiRawData,
  getParticipantReportData,

}
