
import axios from 'axios';
import { getHeaders } from '../shared';
import { URL } from '../constants';

const DataService = {

  fetchAttentionResponseData: (data, studyId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/compare_report/overall_attention`,
      data: data,
      headers: getHeaders().headers
    });
  },

  fetchAllStudyData: () => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/studies`,
      headers: getHeaders().headers
    });
  },

  fetchTotalInfo: () => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/studies/overview`,
      headers: getHeaders().headers
    });
  },

  fetchGraphResponseData: (data, studyId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/compare_report/graph_data`,
      data: data,
      headers: getHeaders().headers
    });
  },
  fetchFeatureResponseData: (data, studyId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/compare_report/feature_attention`,
      data: data,
      headers: getHeaders().headers
    });
  },

  fetchVisualResponseData: (data, studyId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/compare_report/visual_data`,
      data: data,
      headers: getHeaders().headers
    });
  },
  fetchKpiData: (studyId, cellId, stepId, stimId, filterData) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/cell/${cellId}/step/${stepId}/stimuli/${stimId}/kpi_analysis`,
      headers: getHeaders().headers,
      data: filterData
    });
  },
  fetchKpiGraphData: (studyId, cellId, stepId, stimId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/cell/${cellId}/step/${stepId}/stimuli/${stimId}/graph_data`,
      headers: getHeaders().headers
    });
  },
  fetchKpiRawData: (studyId, cellId, stepId, stimId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/cell/${cellId}/step/${stepId}/stimuli/${stimId}/report`,
      headers: getHeaders().headers
    });
  },
  fetchFeatureData: (studyId, cellId, stepId, stimId, filterData) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/cell/${cellId}/step/${stepId}/stimuli/${stimId}/feature_analysis`,
      headers: getHeaders().headers,
      data: filterData
    });
  },
  fetchFeatureRawData: (studyId, cellId, stepId, stimId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/cell/${cellId}/step/${stepId}/stimuli/${stimId}/feature_report`,
      headers: getHeaders().headers
    });
  },
  loginAttempt: (username, password) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/auth-token`,
      data: { username, password },
    });
  },
  getUserData: () => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/user/get-details`,
      headers: getHeaders().headers
    });
  },
  updateUserDetails: ({ first_name, last_name, location, job_title, phone_number }) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/user/update-details`,
      data: { first_name, last_name, location, job_title, phone_number },
      headers: getHeaders().headers
    });
  },
  fetchDemographicData: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/participant_demographic_summary`,
      headers: getHeaders().headers
    });
  },
  fetchStudies: (payloadId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${payloadId}/overview`,
      headers: getHeaders().headers
    });
  },
  fetchSurveyData: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/survey/overview`,
      headers: getHeaders().headers
    });
  },
  fetchStepData: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/steps/overview`,
      headers: getHeaders().headers
    });
  },
  fetchStimData: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/stims/overview`,
      headers: getHeaders().headers
    });
  },
  getStepDetailInfo: (id, data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/steps/step-detail`,
      data: data,
      headers: getHeaders().headers
    });
  },
  getNextButton: () => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/dashboard/data/nextbuttontypes_list`,
      headers: getHeaders().headers
    });
  },
  postNewStepDataToApi: (id, data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/steps/create`,
      data: data,
      headers: getHeaders().headers
    });
  },
  deleteStepFromCell: (id, data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/steps/delete`,
      data: data,
      headers: getHeaders().headers
    });
  },
  postStepReOrderData: (id, data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/steps/overview/edit`,
      data: data,
      headers: getHeaders().headers
    });
  },
  addCell: (id, data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/cells/create`,
      data: data,
      headers: getHeaders().headers
    });
  },
  editTask: (id, data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/cells/edit`,
      data: data,
      headers: getHeaders().headers
    });
  },
  editStepData: (id, data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/steps/edit`,
      data: data,
      headers: getHeaders().headers
    });
  },
  onAddNewStudySubmit: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/create`,
      data: data,
      headers: getHeaders().headers
    });
  },
  fetchStimsData: () => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/stims`,
      headers: getHeaders().headers
    });
  },
  fetchBatchData: () => {

    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/list`,
      headers: getHeaders().headers,
      data: {}
    });
  },
  fetchBatchStimsData: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/stimulus/discovered`,
      headers: getHeaders().headers,
      data: data
    });
  },
  fetchBatchGraphData: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-graph`,
      headers: getHeaders().headers,
      data: data
    });
  },
  unlockStudy: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/steps/overview/edit-toggle/ `,
      headers: getHeaders().headers,
    });
  },
  getParticipantReport: (studyId, cellId, stepId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/cell/${cellId}/step/${stepId}/participant_report `,
      headers: getHeaders().headers,
    });
  },
  fetchAudienceOverviewData: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/audience/overview `,
      headers: getHeaders().headers,
    });
  },
  fetchOverviewData: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/overview `,
      headers: getHeaders().headers,
    });
  },
  createPanel: (id, data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/audience/create `,
      headers: getHeaders().headers,
      data: data
    });
  },
  deletePanel: (id, studyId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/audience/${id}/delete `,
      headers: getHeaders().headers,
    });
  },
  getPanelDetails: (id, studyId) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${studyId}/audience/${id}/details `,
      headers: getHeaders().headers,
    });
  },
  getLinksData: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/links `,
      headers: getHeaders().headers,
    });
  },
  downloadReportData: (id, type) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/${type}`,
      headers: getHeaders().headers,
    });
  },
  getVendorStimList: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/vendor/stimulus/list `,
      headers: getHeaders().headers,
      data: data
    });
  },
  orderACachePage: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/cachepages/order `,
      headers: getHeaders().headers,
      data: data
    });
  },
  getFilesForStudy: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/files `,
      headers: getHeaders().headers,
    });
  },
  getAllFiles: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/files `,
      headers: getHeaders().headers,
    });

  }
};
export default DataService;
