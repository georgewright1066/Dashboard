import DataService from '../../common/services/dataService';
import BatchService from './batchService';
import Creators from './actions';
import Utils from '../../common/utils/Utils'
const fetchBatchStimsBegin = Creators.fetchBatchStimsBegin
const fetchBatchStimsSuccess = Creators.fetchBatchStimsSuccess;
const fetchBatchStimsError = Creators.fetchBatchStimsError;
const fetchBatchDataBegin = Creators.fetchBatchDataBegin
const fetchBatchDataSuccess = Creators.fetchBatchDataSuccess;
const fetchBatchDataError = Creators.fetchBatchDataError;
const fetchVisualsBegin = Creators.fetchVisualsBegin
const fetchVisualsSuccess = Creators.fetchVisualsSuccess;
// const fetchVisualsError = Creators.fetchVisualsError;
const fetchReportBegin = Creators.fetchReportBegin
const fetchReportSuccess = Creators.fetchReportSuccess;
const fetchReportError = Creators.fetchReportError;
const fetchReportFeatureBegin = Creators.fetchReportFeatureBegin
const fetchReportFeatureSuccess = Creators.fetchReportFeatureSuccess;
const fetchReportFeatureError = Creators.fetchReportFeatureError;
const fetchGraphBegin = Creators.fetchGraphBegin
const fetchGraphSuccess = Creators.fetchGraphSuccess;
const fetchGraphError = Creators.fetchGraphError;
const setStimFilter = Creators.setStimFilter;
const setMediaFilter = Creators.setMediaFilter;
const onSearchById = Creators.onSearchById;
const fetchBatchStimsListBegin = Creators.fetchBatchStimsListBegin
const fetchBatchStimsListSuccess = Creators.fetchBatchStimsListSuccess;
const fetchBatchStimsListError = Creators.fetchBatchStimsListError;
const getBatchStimsData = (data) => {

  return async dispatch => {
    try {
      dispatch(fetchBatchStimsBegin());
      const res = await DataService.fetchBatchStimsData(data);
      dispatch(fetchBatchStimsSuccess(res.data.data))
    }
    catch (err) {
      dispatch(fetchBatchStimsError(err))
      throw (err)
    }
  }
}

const getBatchStimsList = (data) => {

  return async dispatch => {
    try {
      dispatch(fetchBatchStimsListBegin());
      const res = await DataService.getVendorStimList(data)
      console.log(res)

      dispatch(fetchBatchStimsListSuccess(res.data.data))
    }
    catch (err) {
      dispatch(fetchBatchStimsListError(err))
      throw (err)
    }
  }
}

const getBatchesData = (data) => {
  return async dispatch => {
    try {
      dispatch(fetchBatchDataBegin());
      const res = await DataService.fetchBatchData(data);

      dispatch(fetchBatchDataSuccess(res.data.data))
    }
    catch (err) {
      dispatch(fetchBatchDataError(err))
      throw (err)
    }
  }
}

const generateReport = (data) => {
  return async dispatch => {
    dispatch(fetchVisualsBegin());
    const heatMap = await BatchService.getReportVisual(data)
    dispatch(fetchVisualsSuccess(heatMap.data));
    dispatch(getBatchStimsData(data))
  }
}

const onKpiClick = (id, vendorId, item, type, index) => {
  const data = {
    internal_batch_id: id,
    internal_vendor_id: vendorId,
    internal_stim_id: item
  }

  return async dispatch => {
    dispatch(fetchVisualsBegin());
    dispatch(fetchReportBegin());
    dispatch(fetchGraphBegin());

    try {
      const res = await BatchService.getReportData(data)
      const heatMap = await BatchService.getReportVisual(data)

      const graphData = await DataService.fetchBatchGraphData(data)

      dispatch(fetchReportSuccess(res.data));
      dispatch(fetchVisualsSuccess(heatMap.data));
      dispatch(fetchGraphSuccess(graphData));

    }

    catch (error) {
      // dispatch(fetchVisualsError());
      dispatch(fetchReportError());
      dispatch(fetchGraphError())
      throw error
    }
  }
}


const onFeatureClick = (id, vendorId, item, type, index) => {
  const data = {
    internal_batch_id: id,
    internal_vendor_id: vendorId,
    internal_stim_id: item

  }
  return async dispatch => {
    dispatch(onKpiClick(id, vendorId, item, type, index));
    dispatch(fetchReportFeatureBegin());
    // dispatch(fetchVisualsBegin());
    // dispatch(fetchReportBegin());
    // dispatch(fetchGraphBegin());



    try {
      // const res = await BatchService.getReportData(data)
      // const heatMap = await BatchService.getReportVisual(data)
      // const graphData = await DataService.fetchBatchGraphData(data)
      const feature = await BatchService.getReportFeatureData(data);
      // dispatch(fetchReportSuccess(res.data));
      // dispatch(fetchVisualsSuccess(heatMap.data));
      // dispatch(fetchGraphSuccess(graphData));
      dispatch(fetchReportFeatureSuccess(feature.data));

    }

    catch (error) {
      // dispatch(fetchVisualsError());
      dispatch(fetchReportFeatureError());
      // dispatch(fetchGraphError())
      throw error
    }
  }
}

const setBatchFilter = (e, type) => {
  return dispatch => {
    if (type === 'stimType') {
      dispatch(setStimFilter(e))
    } else {
      dispatch(setMediaFilter(e))

    }
  }
}

const onSearchByIdChange = (e) => {
  let value = e.target.value
  return dispatch => {
    dispatch(onSearchById(value))
  }
}


const downloadParticipantData = (internalVendorId, internalBatchId, internalStepId, internalStimId, download) => {

  return async (dispatch, getState) => {
    const data = {
      "internal_vendor_id": internalVendorId,
      "internal_batch_id": internalBatchId,
    }

    try {
      // dispatch(fetchKpiRawBegin());
      const rawData = await BatchService.downloadParticipantData(data);
      const download = Utils.ConvertArrayOfObjectsToCSV(rawData.data.data)
      Utils.createDownloadLink(download, 'batch-participant-data');
    }
    catch (error) {
      // dispatch(fetchKpiRawError(error))

    }
  }
}

const downloadFeatureData = (internalVendorId, internalBatchId, internalStepId, internalStimId, download) => {

  return async (dispatch, getState) => {
    const data = {
      "internal_vendor_id": internalVendorId,
      "internal_batch_id": internalBatchId,
      "internal_step_id": internalStepId,
      "internal_stim_id": internalStimId

    }

    try {
      const rawData = await BatchService.downloadParticipantData(data);
      console.log(rawData)
      const download = Utils.ConvertArrayOfObjectsToCSV(rawData.data.data)
      Utils.createDownloadLink(download, 'batch-feature-data');

    }
    catch (error) {
      // dispatch(fetchKpiRawError(error))

    }
  }
}

const downloadStimData = (internalVendorId, internalBatchId, internalStepId, internalStimId, download) => {

  return async (dispatch) => {
    const data = {
      "internal_vendor_id": internalVendorId,
      "internal_batch_id": internalBatchId,
      "internal_step_id": internalStepId,
      "internal_stim_id": internalStimId

    }

    try {
      const rawData = await BatchService.downloadReportStim(data);
      console.log(rawData)
      const download = Utils.ConvertArrayOfObjectsToCSV(rawData.data.data[0].participant_data)
      Utils.createDownloadLink(download, 'batch-stim-data');

    }
    catch (error) {

    }
  }
}


export default {
  getBatchesData,
  getBatchStimsData,
  generateReport,
  onKpiClick,
  onFeatureClick,
  setBatchFilter,
  onSearchByIdChange,
  getBatchStimsList,
  downloadParticipantData,
  downloadFeatureData,
  downloadStimData
}
