import types from './types.js';

const fetchFilesBegin = () => ({
  type: types.FETCH_ALL_FILES_BEGIN
});

const fetchFilesSuccess = (data) => ({
  type: types.FETCH_ALL_FILES_SUCCESS,
  payload: data,

});

const fetchFilesError = error => ({
  type: types.FETCH_ALL_FILES_ERROR,
  payload: { error }
});


export default {
  fetchFilesBegin,
  fetchFilesSuccess,
  fetchFilesError,

};


