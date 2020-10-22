import types from './types';


const fetchAudienceBegin = () => ({
  type: types.FETCH_AUDIENCE_BEGIN
});

const fetchAudienceSuccess = data => ({
  type: types.FETCH_AUDIENCE_SUCCESS,
  payload: data.data
});

const fetchAudienceError = error => ({
  type: types.FETCH_AUDIENCE_ERROR,
  payload: { error }
});



export default {
  fetchAudienceBegin,
  fetchAudienceSuccess,
  fetchAudienceError,

};


