
import axios from 'axios';
import { getHeaders } from '../../common/shared';
import { URL } from '../../common/constants';

const HttpService = {
  getStimTypes: () => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/dashboard/data/stimtypes_list`,
      headers: getHeaders().headers
    });
  },
  getAdTypes: () => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/dashboard/data/adtypes_list`,
      headers: getHeaders().headers
    });
  },
  getEnvironmentList: () => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/dashboard/data/environments_list`,
      headers: getHeaders().headers
    });
  },
  getMediaList: () => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/dashboard/data/medias_list`,
      headers: getHeaders().headers
    });
  },
  getStudyDetails: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/details`,
      headers: getHeaders().headers
    });
  },
  postStudyDetailsEdit: (id, data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/edit`,
      data: data,
      headers: getHeaders().headers
    });
  },
  fetchAudienceDetails: (id) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/audience/overview`,
      headers: getHeaders().headers
    });
  },
};

export default HttpService;