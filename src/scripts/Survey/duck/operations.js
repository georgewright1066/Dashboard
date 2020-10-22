import Creators from './actions';
import DataService from '../../common/services/dataService';
const fetchSurveySuccess = Creators.fetchSurveySuccess
const fetchSurveyBegin = Creators.fetchSurveyBegin;
const fetchSurveyError = Creators.fetchSurveyError;



const fetchSurveyData = (id) => {

  return async (dispatch) => {
    try {
      dispatch(fetchSurveyBegin());
      const res =  await DataService.fetchSurveyData(id)
      console.log(res)
      dispatch(fetchSurveySuccess(res.data))
    }
    catch(error) {
      dispatch(fetchSurveyError(error))
      console.log(error)
    }
  }
}




  export default  {

    fetchSurveyData


  }
