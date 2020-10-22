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



const fetchAgeData = (age) => {

  return async (dispatch) => {
    try {
      dispatch(fetchAgeBegin());
      const res =  await DemographicService.fetchDemographicData(age)
      dispatch(fetchAgeSuccess(res.data))
    }
    catch(error) {
      dispatch(fetchAgeError(error))
      console.log(error)
    }
  }
}


const fetchFamilyData = (family) => {

  return async (dispatch) => {
    try {
      dispatch(fetchFamilyBegin());
      const res =  await DemographicService.fetchDemographicData(family)
      dispatch(fetchFamilySuccess(res.data))
    }
    catch(error) {
      dispatch(fetchFamilyError(error))
      console.log(error)
    }
  }
}

const fetchEarningsData = (earnings) => {

  return async (dispatch) => {
    try {
      dispatch(fetchEarningsBegin());
      const res =  await DemographicService.fetchDemographicData(earnings)
      dispatch(fetchEarningsSuccess(res.data))
    }
    catch(error) {
      dispatch(fetchEarningsError(error))

      console.log(error)
    }
  }
}

const fetchGenderData = (gender) => {

  return async (dispatch) => {
    try {
      dispatch(fetchGenderBegin());
      const res =  await DemographicService.fetchDemographicData(gender)
      dispatch(fetchGenderSuccess(res.data))
    }
    catch(error) {
      dispatch(fetchGenderError(error))
      console.log(error)
    }
  }
}

const submitFilterDetails = (value) => {

  return async (dispatch,getState) => {
    const currentArray = (getState().filter.filtersArray);
    if(!currentArray.includes(value)) {
      dispatch(addToFiltersArray(value))
    } else {
      dispatch(removeFromFiltersArray(value));
    }
    const data  = (getState().filter.filtersArray);
    localStorage.setItem('checkedBoxes', JSON.stringify(data));
  }

}

const resetFilters = () => {
  return async (dispatch) => {
    localStorage.removeItem('checkedBoxes')
    dispatch(clearFilters())
  }
}




  export default  {

    fetchAgeData,
    fetchFamilyData,
    fetchEarningsData,
    fetchGenderData,
    submitFilterDetails,
    setFiltersToLive,
    resetFilters

  }
