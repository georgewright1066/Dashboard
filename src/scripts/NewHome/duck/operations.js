import DataService from '../../common/services/dataService';
import Creators from './actions';
const fetchTotalInfoBegin = Creators.fetchTotalInfoBegin;
const fetchTotalInfoSuccess = Creators.fetchTotalInfoSuccess;
const fetchTotalInfoError = Creators.fetchTotalInfoError;

const getTotalInfo = () => {
    return async dispatch => {
        try {
            dispatch(fetchTotalInfoBegin());
            const res = await DataService.fetchTotalInfo();
            dispatch(fetchTotalInfoSuccess(res))
        }
        catch (err) {
            dispatch(fetchTotalInfoError(err))
            throw (err)
        }
    }
}

export default {
    getTotalInfo,
    fetchTotalInfoBegin,
    fetchTotalInfoSuccess,
    fetchTotalInfoError,
}
