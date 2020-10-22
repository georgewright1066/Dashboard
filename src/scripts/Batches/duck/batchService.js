
import axios from 'axios';
import { getHeaders } from '../../common/shared';
import { URL } from '../../common/constants';

const BatchService = {

  getReportVisual: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-visual`,
      data: data,
      headers: getHeaders().headers
    });
  },
  getReportData: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-data`,
      data: data,
      headers: getHeaders().headers
    });
  },
  getReportFeatureData: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-feature-data`,
      data: data,
      headers: getHeaders().headers
    });
  },
  getReportParticipantData: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-participant-data`,
      data: data,
      headers: getHeaders().headers
    });
  },
  getReportParticipantFeatureData: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-participant-feature-data`,
      data: data,
      headers: getHeaders().headers
    });
  },
  getReportParticipant: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-participant`,
      data: data,
      headers: getHeaders().headers
    });
  },
  getReportStats: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-stats`,
      data: data,
      headers: getHeaders().headers
    });
  },
  downloadParticipantData: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-participant`,
      data: data,
      headers: getHeaders().headers
    });
  },
  downloadFeatureData: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-participant-feature-data/`,
      data: data,
      headers: getHeaders().headers
    });
  },
  downloadReportStim: (data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/batch/report-participant-data`,
      data: data,
      headers: getHeaders().headers
    });
  }
}

export default BatchService
