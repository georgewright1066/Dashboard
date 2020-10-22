import Creators from './actions';
import DataService from '../../common/services/dataService';

const fetchDemographicBegin = Creators.fetchDemographicBegin
const fetchDemographicSuccess = Creators.fetchDemographicSuccess
const fetchDemographicError = Creators.fetchDemographicError;
const setDemographicFilter = Creators.setDemographicFilter;
const fetchDemographicGraphBegin = Creators.fetchDemographicGraphBegin;
const fetchDemographicGraphSuccess = Creators.fetchDemographicGraphSuccess;
const fetchDemographicGraphError = Creators.fetchDemographicGraphError

const fetchDemographicRawBegin = Creators.fetchDemographicRawBegin
const fetchDemographicRawSuccess = Creators.fetchDemographicRawSuccess
const fetchDemographicRawError = Creators.fetchDemographicRawError;




 const fetchDemographicData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDemographicBegin());

      const res =  await DataService.fetchDemographicData(id);
      dispatch(fetchDemographicSuccess(res.data.data))

    }
    catch(error) {
      dispatch(fetchDemographicError({error:'Somethign went wrong'}))

    }
  }
}

const fetchDemographicGraphData = ({studyId, cellId, stepId, stimId }) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDemographicGraphBegin());

      const graphRes = await DataService.fetchDemographicGraphData(studyId, cellId, stepId, stimId);
      dispatch(fetchDemographicGraphSuccess(graphRes))

    }
    catch(error) {
      dispatch(fetchDemographicGraphError(error))

    }
  }
}

const fetchDemographicRawData = ({studyId, cellId, stepId, stimId }) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDemographicRawBegin());

      const rawData = await DataService.fetchDemographicRawData(studyId, cellId, stepId, stimId);
      dispatch(fetchDemographicRawSuccess(rawData))

    }
    catch(error) {
      dispatch(fetchDemographicRawError(error))

    }
  }
}



  export default  {
    fetchDemographicBegin,
    fetchDemographicSuccess,
    fetchDemographicError,
    setDemographicFilter,
    fetchDemographicData,
    fetchDemographicGraphBegin,
    fetchDemographicGraphSuccess,
    fetchDemographicGraphError,
    fetchDemographicGraphData,
    fetchDemographicRawData

  }
