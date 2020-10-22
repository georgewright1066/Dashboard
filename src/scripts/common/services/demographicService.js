
import axios from 'axios';
import { getHeaders } from '../shared';
import { URL } from '../constants';

const DemographicService = {

  fetchDemographicData: (age) => {
    return axios({
      method: 'get',
      url: `${URL}/v1.0/dashboard/data/demographics/${age}_list`,
      headers: getHeaders().headers
    });
  }
};

export default DemographicService;
