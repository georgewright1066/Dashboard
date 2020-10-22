
import axios from 'axios';
import { getHeaders } from '../../common/shared';
import { URL } from '../../common/constants';

const DataService = {
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
  getMediaTypes: () => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/dashboard/data/medias_list`,
      headers: getHeaders().headers
    });
  },
  getBrandTypes: () => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/dashboard/data/brands_list`,
      headers: getHeaders().headers
    });
  },
  getBrandCategorys: () => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/dashboard/data/brandcategorys_list`,
      headers: getHeaders().headers
    });
  },
  getAdCategorys: () => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/dashboard/data/adcategorys_list`,
      headers: getHeaders().headers
    });
  },
  editPanelDetails: (id, panelId, data) => {
    return axios({
      method: 'post',
      url: `${URL}/v1.0/studies/${id}/audience/${panelId}/edit`,
      headers: getHeaders().headers,
      data: data
    });
  }
};

export default DataService;

