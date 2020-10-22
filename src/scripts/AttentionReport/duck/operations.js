
import Creators from './actions';
import DataService from '../../common/services/dataService';
import Utils from '../../common/utils/Utils';

const setAttentionFilter = Creators.setAttentionFilter;
const setFeatureFilter = Creators.setFeatureFilter;
const setVisualsFilter = Creators.setVisualsFilter;
const fetchFeatureError = Creators.fetchFeatureError;
const fetchFeatureSuccess = Creators.fetchFeatureSuccess;
const fetchFeatureBegin = Creators.fetchFeatureBegin;
const fetchGraphError = Creators.fetchGraphError;
const fetchGraphSuccess = Creators.fetchGraphSuccess;
const fetchGraphBegin = Creators.fetchGraphBegin;
const fetchAttentionError = Creators.fetchAttentionError;
const fetchAttentionBegin = Creators.fetchAttentionBegin;
const fetchAttentionSuccess = Creators.fetchAttentionSuccess;
const fetchVisualsBegin = Creators.fetchVisualsBegin;
const fetchVisualsSuccess = Creators.fetchVisualsSuccess;
const fetchVisualsError = Creators.fetchVisualsError;
const fetchDemographicError = Creators.fetchDemographicError;
const fetchDemographicBegin = Creators.fetchDemographicBegin;
const fetchDemographicSuccess = Creators.fetchDemographicSuccess;

const createPostDataObject = (whichStudiesAreChecked) => {

  const studyData = whichStudiesAreChecked.map(item => item.split(':'))
  const studyId = studyData[0][2];
  const postData = studyData.map(data => {
    const obj = {};
    obj["cell_id"] = parseInt(data[0], 10)
    obj["step_id"] = parseInt(data[1], 10)
    obj["stim_id"] = parseInt(data[3], 10)
    return obj
  })

  return { postData, studyId }
}

const getAttentionReportData = (whichStudiesAreChecked) => {
  localStorage.setItem("attentionReportData", whichStudiesAreChecked);
  // This is the order
  // `${item.cell_id}:${stimulus.step_id}:${studyId}:${stimulus.stimulus_id}` )
  let postData = createPostDataObject(whichStudiesAreChecked).postData;
  const studyId = createPostDataObject(whichStudiesAreChecked).studyId;

  return async (dispatch, getState) => {
    const filter = getState().filter.filtersArray;
    let filterData =
      Utils.GroupByCategory(filter, 'name');
    Utils.FormatDataSet(filterData);

    const studyPostData = {
      data: postData
    }

    const data = Object.assign(studyPostData, filterData)

    try {
      dispatch(fetchAttentionBegin());
      dispatch(fetchGraphBegin());
      dispatch(fetchVisualsBegin());

      const attentionResponse = await DataService.fetchAttentionResponseData(data, studyId);

      const graphResponse = await DataService.fetchGraphResponseData(data, studyId);

      const featureResponse = await DataService.fetchFeatureResponseData(data, studyId);

      const visualsResponse = await DataService.fetchVisualResponseData(data, studyId);

      dispatch(fetchAttentionSuccess(attentionResponse))
      dispatch(fetchGraphSuccess(graphResponse));
      dispatch(fetchFeatureSuccess(featureResponse));
      dispatch(fetchVisualsSuccess(visualsResponse));
    }
    catch (err) {
      dispatch(fetchAttentionError(err))
      dispatch(fetchGraphError(err))
      dispatch(fetchVisualsError(err))
    }
  }
}

const returnWhichNormToFilterBy = (filter) => {
  switch (filter) {
    case 'Brand Norm':
      return filter = 1;
    case 'Brand Category Norm':
      return filter = 2;
    case 'Base Norm':
      return filter = 3;
    case 'Ad Category Norm':
      return filter = 4;
    default:
      return filter = 1;
  }
}


const updateFeatureNorms = (filter) => {
  const normTypeId = returnWhichNormToFilterBy(filter);
  return async (dispatch, getState) => {
    const whichStudiesAreChecked = (getState().isolationData.whichStudiesAreChecked);
    const postData = createPostDataObject(whichStudiesAreChecked).postData;
    const studyId = createPostDataObject(whichStudiesAreChecked).studyId;

    const filter = getState().filter.filtersArray;
    let filterData =
      Utils.GroupByCategory(filter, 'name');
    Utils.FormatDataSet(filterData);

    const studyPostData = {
      data: postData,
      norm_type_id: parseInt(normTypeId, 10)
    }
    const data = Object.assign(studyPostData, filterData)

    const featureResponse = await DataService.fetchFeatureResponseData(data, studyId);
    dispatch(fetchFeatureSuccess(featureResponse));
  }
}


const updateAttentionValues = (filter) => {

  filter = returnWhichNormToFilterBy(filter);

  return async (dispatch, getState) => {
    const whichStudiesAreChecked = (getState().isolationData.whichStudiesAreChecked);
    const postData = createPostDataObject(whichStudiesAreChecked).postData;
    const studyId = createPostDataObject(whichStudiesAreChecked).studyId;

    const data = {
      data: postData,
      norm_type_id: parseInt(filter, 10)
    }

    const attentionResponse = await DataService.fetchAttentionResponseData(data, studyId);
    dispatch(fetchAttentionSuccess(attentionResponse));

  }
};

const fetchDemographicData = (studyId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDemographicBegin())
      const demoData = await DataService.fetchDemographicData(studyId);
      dispatch(fetchDemographicSuccess(demoData.data.data))
    }
    catch (err) {
      console.log(err)
      dispatch(fetchDemographicError())
    }
  }
}

export default {
  getAttentionReportData,
  setAttentionFilter,
  setFeatureFilter,
  setVisualsFilter,
  fetchFeatureError,
  fetchFeatureSuccess,
  fetchFeatureBegin,
  fetchGraphError,
  fetchGraphSuccess,
  fetchGraphBegin,
  fetchAttentionError,
  fetchAttentionBegin,
  fetchAttentionSuccess,
  updateAttentionValues,
  updateFeatureNorms,
  fetchDemographicData

}

