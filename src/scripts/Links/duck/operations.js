import DataService from '../../common/services/dataService';
import Creators from './actions';
const fetchLinksBegin = Creators.fetchLinksBegin
const fetchLinksSuccess = Creators.fetchLinksSuccess;
const fetchLinksError = Creators.fetchLinksError;



const getLinksData = (data) => {

  return async dispatch => {
    try {
      dispatch(fetchLinksBegin());
      const res = await DataService.getLinksData(data);
      dispatch(fetchLinksSuccess(res.data))
    }
    catch (err) {
      dispatch(fetchLinksError(err))
      throw (err)
    }
  }
}



export default {
  getLinksData,

}
