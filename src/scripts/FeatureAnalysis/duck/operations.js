import Creators from './actions';
import KpiCreators from '../../Kpi/duck/actions'
import DataService from '../../common/services/dataService';
import Utils from '../../common/utils/Utils';
const fetchFeatureBegin = Creators.fetchFeatureBegin
const fetchFeatureSuccess = Creators.fetchFeatureSuccess
const fetchFeatureError = Creators.fetchFeatureError;
const setFeatureAnalysisFilter = Creators.setFeatureAnalysisFilter
const fetchFeatureRawBegin = Creators.fetchFeatureRawBegin
const fetchFeatureRawSuccess = Creators.fetchFeatureRawSuccess
const fetchFeatureRawError = Creators.fetchFeatureRawError;
const fetchParticipantReportBegin = KpiCreators.fetchParticipantReportBegin;
const fetchParticipantReportSuccess = KpiCreators.fetchParticipantReportSuccess;
const fetchParticipantReportError = KpiCreators.fetchParticipantReportError;

const fetchFeatureData = ({ studyId, cellId, stepId, stimId }) => {
  return async (dispatch, getState) => {
    const filter = getState().filter.filtersArray;

    let filterData =
      Utils.GroupByCategory(filter, 'name');
    Utils.FormatDataSet(filterData);
    try {
      dispatch(fetchFeatureBegin());
      dispatch(fetchParticipantReportBegin());
      const participantRes = await DataService.getParticipantReport(studyId, cellId, stepId);

      const res = await DataService.fetchFeatureData(studyId, cellId, stepId, stimId, filterData)
      dispatch(fetchFeatureSuccess(res.data))
      dispatch(fetchParticipantReportSuccess(participantRes.data))

    }
    catch (error) {
      dispatch(fetchFeatureError({ error: 'something went wrong' }))
      dispatch(fetchParticipantReportError({ error: 'Somethign went wrong' }))

    }
  }
}




const fetchFeatureRawData = (studyId, cellId, stepId, stimId, download) => {
  return async (dispatch) => {
    try {
      dispatch(fetchFeatureRawBegin());

      const rawData = await DataService.fetchFeatureRawData(studyId, cellId, stepId, stimId);
      if (download === 'DOWNLOAD') {
        const flattenendObjArray = rawData.data.data.map(item => Utils.FlattenObject(item))
        const download = Utils.ConvertArrayOfObjectsToCSV(flattenendObjArray)
        Utils.createDownloadLink(download, 'feature-data');
      } else {
        dispatch(fetchFeatureRawSuccess(rawData))
      }

    }
    catch (error) {
      dispatch(fetchFeatureRawError(error))

    }
  }
}

export default {
  fetchFeatureBegin,
  fetchFeatureSuccess,
  fetchFeatureError,
  setFeatureAnalysisFilter,
  fetchFeatureData,
  fetchFeatureRawData
}
