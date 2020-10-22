import types from './types.js';

const fetchTotalInfoBegin = () => ({
    type: types.FETCH_TOTAL_INFO_BEGIN
});

const fetchTotalInfoSuccess = studies => ({
    type: types.FETCH_TOTAL_INFO_SUCCESS,
    payload: { studies }
});

const fetchTotalInfoError = error => ({
    type: types.FETCH_TOTAL_INFO_ERROR,
    payload: { error }
});

export default {
    fetchTotalInfoBegin,
    fetchTotalInfoSuccess,
    fetchTotalInfoError,
};


