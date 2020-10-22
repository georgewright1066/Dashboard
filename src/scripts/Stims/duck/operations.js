import DataService from '../../common/services/dataService';
import HttpService from '../../Dashboard/duck/HttpService';

import Creators from './actions';

const fetchStimsBegin = Creators.fetchStimsBegin
const fetchStimsSuccess = Creators.fetchStimsSuccess;
const fetchStimsError = Creators.fetchStimsError;
const setStimFilters = Creators.setStimFilter
const getTypesBegin = Creators.getTypesBegin;
const getTypesSuccess = Creators.getTypesSuccess
const setStimTypeFilter = Creators.setStimTypeFilter;
const setMediaFilter = Creators.setMediaFilter
const sortByAscendingOrder = Creators.sortByAscendingOrder
const sortByDecendingOrder = Creators.sortByDecendingOrder;

const getStimsData = () => {
  return async dispatch => {
    try {
      dispatch(fetchStimsBegin());
      dispatch(getTypes())

      const res = await DataService.fetchStimsData();
      dispatch(fetchStimsSuccess(res.data))

    }
    catch (err) {
      dispatch(fetchStimsError(err))
      throw (err)
    }
  }
}
const getTypes = () => {

  return async dispatch => {
    dispatch(getTypesBegin());

    try {
      const envResults = await HttpService.getEnvironmentList()
      const mediaResults = await HttpService.getMediaList()
      const stimTypesResults = await HttpService.getStimTypesList()
      const languageResults = await HttpService.getLanguageList()
      dispatch(getTypesSuccess(envResults.data, mediaResults.data, stimTypesResults.data, languageResults.data))
    }
    catch (err) {
      throw (err)
    }
  }
}

const setStimFilter = (e, type) => {
  return dispatch => {
    if (type === 'media') {
      dispatch(setMediaFilter(e));
    } else if (type === 'stimType') {
      dispatch(setStimTypeFilter(e));
    } else {
      dispatch(setStimFilters(e, type));
    }
  }
}

const sortAscendingData = (item, type) => {
  if (type === 'DECENDING') {
    return dispatch => {
      dispatch(sortByDecendingOrder(item, type))
    }
  } else {
    return dispatch => {
      dispatch(sortByAscendingOrder(item, type))
    }
  }
}


export default {
  getStimsData,
  getTypes,
  setStimFilter,
  sortAscendingData,
}
