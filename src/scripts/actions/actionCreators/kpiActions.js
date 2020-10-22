import { URL, FETCH_KPI_BEGIN, FETCH_KPI_SUCCESS, FETCH_KPI_ERROR, SET_KPI_FILTER} from '../constants';
import axios from 'axios';
import {getHeaders} from '../shared';

// KPI DATA

export function fetchKpiData ({studyId, cellId, stepId, stimId }) {
    return async (dispatch) => {
      try {
        dispatch(fetchKpiBegin());

        const res =  await axios.get(`${URL}/studies/${studyId}/cell/${cellId}/step/${stepId}/stimuli/${stimId}/kpi_analysis`, getHeaders());
        dispatch(fetchKpiSuccess(res.data))
      }
      catch(error) {
        dispatch({
          type: FETCH_KPI_ERROR,
          payload: 'something went wrong'
        })
      }
    }
  }

  export const fetchKpiBegin = () => ({
    type: FETCH_KPI_BEGIN
  });

  export const fetchKpiSuccess = data => ({
    type: FETCH_KPI_SUCCESS,
    payload: data
  });

  export const fetchKpiError = error => ({
    type: FETCH_KPI_ERROR,
    payload: { error }
  });

  export const setKpiFilter = filter => ({
    type: SET_KPI_FILTER,
    payload: filter
  });

