import Creators from './actions';
import DataService from '../../common/services/dataService';
import { LinksOperations } from '../../Links/duck/index';
import Utils from '../../common/utils/Utils';
const getAudienceOverviewDataBegin = Creators.getAudienceOverviewDataBegin;
const getAudienceOverviewDataSuccess = Creators.getAudienceOverviewDataSuccess;
const getAudienceOverviewDataError = Creators.getAudienceOverviewDataError;
const getOverviewBegin = Creators.fetchOverviewBegin;
const getOverviewSuccess = Creators.fetchOverviewSuccess;
const getOverviewError = Creators.fetchOverviewError
const openAudienceModal = Creators.openModal
const closeModal = Creators.closeModal
const createPanelSuccess = Creators.createPanelSuccess;
const createPanelError = Creators.createPanelErrors
const openConfirmationModalDispatch = Creators.openConfirmationModal
const closeConfirmationModal = Creators.closeConfirmationModal
const deleteSuccess = Creators.deleteSuccess
const fetchPanelDetailsBegin = Creators.fetchPanelDetailsBegin;
const fetchPanelDetailsSuccess = Creators.fetchPanelDetailsSuccess;
const fetchPanelDetailsError = Creators.fetchPanelDetailsError;
const openFilesModalDispatch = Creators.openFilesModal;
const closeFilesModal = Creators.closeFilesModal;

const getAudienceOverviewData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(getAudienceOverviewDataBegin())
      const res = await DataService.fetchAudienceOverviewData(id)
      dispatch(getAudienceOverviewDataSuccess(res.data))
    }

    catch (error) {
      dispatch(getAudienceOverviewDataError())
      throw error
    }
  }
}

const getOverviewData = (id) => {

  return async dispatch => {
    try {
      dispatch(getOverviewBegin());
      const res = await DataService.fetchOverviewData(id);
      dispatch(getOverviewSuccess(res.data))

    }
    catch (err) {
      dispatch(getOverviewError(err))
      throw (err)
    }
  }
}

const openModal = (id, action) => {
  return (dispatch) => {
    dispatch(action);
    dispatch(openAudienceModal(id));

  };
};


const openConfirmationModal = (id, action) => {
  return (dispatch) => {
    dispatch(action);
    dispatch(openConfirmationModalDispatch(id));

  };
};


const createPanel = (id, data) => {
  return async dispatch => {

    try {
      await DataService.createPanel(id, data);
      dispatch(createPanelSuccess())
      dispatch(getOverviewData(id))
      dispatch(LinksOperations.getLinksData(id))
    }
    catch (err) {
      dispatch(createPanelError(err))
      throw (err)
    }
  }
}

const onDeleteClick = (id, studyId) => {
  return async dispatch => {
    try {
      await DataService.deletePanel(id, studyId);
      dispatch(deleteSuccess())
      dispatch(LinksOperations.getLinksData(studyId))
      dispatch(getOverviewData(studyId))
    }
    catch (err) {
      throw (err)
    }
  }
}

const editPanelDetails = (id, studyId) => {

  return async dispatch => {
    dispatch(fetchPanelDetailsBegin())
    try {
      const res = await DataService.getPanelDetails(id, studyId);
      dispatch(fetchPanelDetailsSuccess(res.data))
      dispatch(LinksOperations.getLinksData(studyId))


    }
    catch (err) {
      dispatch(fetchPanelDetailsError())
      throw (err)
    }
  }
}

const downloadReportData = (id, type) => {
  return async (dispatch) => {

    try {
      const rawData = await DataService.downloadReportData(id, type);
      const flattenendObjArray = rawData.data.data.map(item => Utils.FlattenObject(item))
      const download = Utils.ConvertArrayOfObjectsToCSV(flattenendObjArray)

      Utils.createDownloadLink(download, type);

    }
    catch (error) {
      throw error
    }
  }
}


const openFilesModal = (id, action) => {
  return async (dispatch) => {
    dispatch(action);
    try {
      const res = await DataService.getFilesForStudy(id)
      dispatch(openFilesModalDispatch(res.data.data));
    }
    catch {

    }

  };
};




export default {
  getAudienceOverviewData,
  openModal,
  getOverviewData,
  closeModal,
  createPanel,
  onDeleteClick,
  editPanelDetails,
  openConfirmationModal,
  closeConfirmationModal,
  downloadReportData,
  openFilesModal,
  closeFilesModal
};
