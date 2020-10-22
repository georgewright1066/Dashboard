import Creators from './actions';
import HttpService from './HttpService';
import { CellStepManagementOperations } from '../../CellStepManagement/duck/index';

const fetchMediaBegin = Creators.fetchMediaBegin
const fetchMediaSuccess = Creators.fetchMediaSuccess
const fetchMediaError = Creators.fetchMediaError;

const fetchEnvironmentBegin = Creators.fetchEnvironmentBegin
const fetchEnvironmentSuccess = Creators.fetchEnvironmentSuccess
const fetchEnvironmentError = Creators.fetchEnvironmentError;

const fetchStudyDetailsBegin = Creators.fetchStudyDetailsBegin
const fetchStudyDetailsSuccess = Creators.fetchStudyDetailsSuccess
const fetchStudyDetailsError = Creators.fetchStudyDetailsError;

const fetchMediaTypes = () => {
  return async dispatch => {
    try {
      dispatch(fetchMediaBegin());
      const res = await HttpService.getMediaList();
      dispatch(fetchMediaSuccess(res.data))
    }
    catch (err) {
      dispatch(fetchMediaError(err))
      throw err

    }
  }
}

const fetchEnvironmentTypes = () => {
  return async dispatch => {
    try {
      dispatch(fetchEnvironmentBegin());
      const res = await HttpService.getEnvironmentList();
      dispatch(fetchEnvironmentSuccess(res.data))
    }
    catch (err) {
      dispatch(fetchEnvironmentError(err))
      throw err

    }
  }
}


const fetchStudyDetails = (id) => {
  return async dispatch => {
    try {
      dispatch(fetchStudyDetailsBegin());
      const res = await HttpService.getStudyDetails(id);
      dispatch(fetchStudyDetailsSuccess(res.data))
    }
    catch (err) {
      dispatch(fetchStudyDetailsError(err))
      throw err

    }
  }
}

const onSubmit = () => {
  return dispatch => {
    dispatch(CellStepManagementOperations.savedNotification())
  }
}





export default {
  fetchMediaTypes,
  fetchEnvironmentTypes,
  fetchStudyDetails,
  onSubmit

}
