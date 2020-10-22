import DataService from '../../common/services/dataService';

import Creators from './actions';

const fetchFilesBegin = Creators.fetchFilesBegin
const fetchFilesSuccess = Creators.fetchFilesSuccess;
const fetchFilesError = Creators.fetchFilesError;


const getFilesData = () => {
  return async dispatch => {
    try {
      dispatch(fetchFilesBegin());

      const res = await DataService.getAllFiles();
      dispatch(fetchFilesSuccess(res.data.data))

    }
    catch (err) {
      dispatch(fetchFilesError(err))
      throw (err)
    }
  }
}



export default {
  getFilesData
}

