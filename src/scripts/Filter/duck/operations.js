import Creators from './actions';
import DemographicService from '../../common/services/demographicService';

const fetchAgeSuccess = Creators.fetchAgeSuccess
const fetchAgeBegin = Creators.fetchAgeBegin;
const fetchAgeError = Creators.fetchAgeError;
const fetchFamilySuccess = Creators.fetchFamilySuccess
const fetchFamilyBegin = Creators.fetchFamilyBegin;
const fetchFamilyError = Creators.fetchFamilyError;
const fetchEarningsSuccess = Creators.fetchEarningsSuccess
const fetchEarningsBegin = Creators.fetchEarningsBegin;
const fetchEarningsError = Creators.fetchEarningsError;
const fetchGenderSuccess = Creators.fetchGenderSuccess
const fetchGenderBegin = Creators.fetchGenderBegin;
const fetchGenderError = Creators.fetchGenderError;
const addToFiltersArray = Creators.addToFiltersArray;
const removeFromFiltersArray = Creators.removeFromFiltersArray;
const setFiltersToLive = Creators.setFiltersToLive;
const clearFilters = Creators.clearFilters;
const openModal = Creators.openModal;
const check = Creators.check;
const closeModal = Creators.closeModal;

const fetchAgeData = (age) => {

  return async (dispatch) => {
    try {
      dispatch(fetchAgeBegin());
      const res = await DemographicService.fetchDemographicData(age)
      dispatch(fetchAgeSuccess(res.data))
    }
    catch (error) {
      dispatch(fetchAgeError(error))
      throw (error)
    }
  }
}


const fetchFamilyData = (family) => {

  return async (dispatch) => {
    try {
      dispatch(fetchFamilyBegin());
      const res = await DemographicService.fetchDemographicData(family)
      dispatch(fetchFamilySuccess(res.data))
    }
    catch (error) {
      dispatch(fetchFamilyError(error))
      throw (error)
    }
  }
}

const fetchEarningsData = (earnings) => {

  return async (dispatch) => {
    try {
      dispatch(fetchEarningsBegin());
      const res = await DemographicService.fetchDemographicData(earnings)
      dispatch(fetchEarningsSuccess(res.data))
    }
    catch (error) {
      dispatch(fetchEarningsError(error))

      throw (error)
    }
  }
}

const fetchGenderData = (gender) => {

  return async (dispatch) => {
    try {
      dispatch(fetchGenderBegin());
      const res = await DemographicService.fetchDemographicData(gender)
      dispatch(fetchGenderSuccess(res.data))
    }
    catch (error) {
      dispatch(fetchGenderError(error))
      throw (error)
    }
  }
}

const submitFilterDetails = (value) => {
  return async (dispatch, getState) => {
    const currentArray = (getState().filter.filtersArray);
    const itemToRemove = (currentArray.find(obj => obj.id === value.id && obj.name === value.name));
    itemToRemove ? dispatch(removeFromFiltersArray(itemToRemove)) : dispatch(addToFiltersArray(value))
  }
}


export default {
  fetchAgeBegin,
  fetchAgeData,
  fetchFamilyData,
  fetchEarningsData,
  fetchGenderData,
  submitFilterDetails,
  setFiltersToLive,
  clearFilters,
  openModal,
  check,
  closeModal

}
