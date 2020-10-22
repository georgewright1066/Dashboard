import { URL, FETCH_STUDIES_BEGIN, FETCH_STUDIES_SUCCESS, FETCH_TOTAL_INFO_SUCCESS, FETCH_STUDIES_ERROR, SORT_BY_ASCENDING_ORDER, SORT_BY_DECENDING_ORDER, IS_LIVE, COMPLETED, MEDIA_TYPE, ENVIRONMENT_TYPE, SEARCH} from '../../common/constants';
import axios from 'axios';
import {getHeaders} from '../shared';


export function getStudyData() {
      return async dispatch => {
      try {
        dispatch(fetchStudiesBegin());
        const res = await axios.get(`${URL}/studies`,  getHeaders());
        dispatch(fetchStudiesSuccess(res))
      }
      catch (err) {
        dispatch(fetchStudiesError(err))
      }
    }
  }

  export const fetchStudiesBegin = () => ({
    type: FETCH_STUDIES_BEGIN
  });

  export const fetchStudiesSuccess = studies => ({
    type: FETCH_STUDIES_SUCCESS,
    payload: { studies }
  });

  export const fetchTotalInfoSuccess = studies => ({
    type: FETCH_TOTAL_INFO_SUCCESS,
    payload: { studies }
  });

  export const fetchStudiesError = error => ({
    type: FETCH_STUDIES_ERROR,
    payload: { error }
  });


  export function sortAscendingData(item, type) {
    if(type === 'DECENDING') {
      return dispatch => {
        dispatch(sortByDecendingOrder(item, type))
      }
    } else {
      return dispatch => {
        dispatch(sortByAscendingOrder(item, type))
      }
    }
  }

  export const sortByAscendingOrder = (item, type) => ({
    type: SORT_BY_ASCENDING_ORDER,
    item: item,
    ascOrDec: type
  });

  export const sortByDecendingOrder = (item, type) => ({
    type: SORT_BY_DECENDING_ORDER,
    item: item,
    ascOrDec: type
  });



  export function search(value) {
    return {
      type: SEARCH,
      value
    };
  }

  export function toggleLive(isLive) {
    return {
      type: IS_LIVE,
      isLive
    };
  }

  export function toggleCompleted() {
    return {
      type: COMPLETED
    };
  }

  export function setMediaFilter(value) {
    return {
      type: MEDIA_TYPE,
      value
    };
  }

  export function setEnvironmentFilter(environment) {
    return {
      type: ENVIRONMENT_TYPE,
      environment
    };
  }
