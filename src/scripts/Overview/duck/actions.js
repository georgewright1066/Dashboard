import types from './types.js';

const fetchOverviewBegin = () => ({
  type: types.FETCH_OVERVIEW_BEGIN
});

const fetchOverviewSuccess = data => ({
  type: types.FETCH_OVERVIEW_SUCCESS,
  payload: data
});

const fetchOverviewError = error => ({
  type: types.FETCH_OVERVIEW_ERROR,
  payload: { error }
});

const getAudienceOverviewDataBegin = () => ({
  type: types.FETCH_AUDIENCE_OVERVIEW_BEGIN
});

const getAudienceOverviewDataSuccess = data => ({
  type: types.FETCH_AUDIENCE_OVERVIEW_SUCCESS,
  payload: data
});

const getAudienceOverviewDataError = error => ({
  type: types.FETCH_AUDIENCE_OVERVIEW_ERROR,
  payload: { error }
});


const openModal = (id) => ({
  type: types.OPEN_AUDIENCE_MODAL,
  id: id

});

const closeModal = () => ({
  type: types.CLOSE_AUDIENCE_MODAL

});

const createPanelSuccess = () => ({
  type: types.CREATE_PANEL_SUCCESS
})
const createPanelError = () => ({
  type: types.CREATE_PANEL_ERROR
})

const fetchPanelDetailsBegin = () => ({
  type: types.FETCH_PANEL_DETAILS_BEGIN
});

const fetchPanelDetailsSuccess = data => ({
  type: types.FETCH_PANEL_DETAILS_SUCCESS,
  payload: data
});

const fetchPanelDetailsError = error => ({
  type: types.FETCH_PANEL_DETAILS_ERROR,
  payload: { error }
});

const openConfirmationModal = (id) => ({
  type: types.OPEN_CONFIRMATION_MODAL,
  id: id

});

const closeConfirmationModal = () => ({
  type: types.CLOSE_CONFIRMATION_MODAL

});

const deleteSuccess = () => ({
  type: types.DELETE_SUCCESS

});
const openFilesModal = (data) => ({
  type: types.OPEN_FILES_MODAL,
  payload: data

});

const closeFilesModal = () => ({
  type: types.CLOSE_FILES_MODAL

});


export default {
  fetchOverviewSuccess,
  fetchOverviewError,
  fetchOverviewBegin,
  getAudienceOverviewDataBegin,
  getAudienceOverviewDataSuccess,
  getAudienceOverviewDataError,
  openModal,
  closeModal,
  createPanelSuccess,
  createPanelError,
  fetchPanelDetailsSuccess,
  fetchPanelDetailsError,
  fetchPanelDetailsBegin,
  openConfirmationModal,
  closeConfirmationModal,
  deleteSuccess,
  closeFilesModal,
  openFilesModal

};


