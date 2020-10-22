import Creators from './actions';
import HttpService from '../../EditStudyDetails/duck/HttpService';
import { CellStepManagementOperations } from '../../CellStepManagement/duck/index';


const fetchAudienceBegin = Creators.fetchAudienceBegin
const fetchAudienceSuccess = Creators.fetchAudienceSuccess
const fetchAudienceError = Creators.fetchAudienceError;


const fetchAudienceDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchAudienceBegin())
      const res = await HttpService.fetchAudienceDetails(id)
      dispatch(fetchAudienceSuccess(res))
    }
    catch (error) {
      dispatch(fetchAudienceError())
      throw error
    }
  }
}

const onSubmit = () => {
  return dispatch => {
    dispatch(CellStepManagementOperations.savedNotification())
  }
}


export default {
  fetchAudienceDetails,
  onSubmit

}
