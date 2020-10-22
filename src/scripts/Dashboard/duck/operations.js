import DataService from '../../common/services/dataService';
import HttpService from './HttpService';
import Creators from './actions';
const setEnvironmentFilter = Creators.setEnvironmentFilter
const setMediaFilter = Creators.setMediaFilter
const toggleCompleted = Creators.toggleCompleted;
const toggleLive = Creators.toggleLive
const search = Creators.search
const sortByAscendingOrder = Creators.sortByAscendingOrder
const sortByDecendingOrder = Creators.sortByDecendingOrder;
const fetchStudiesBegin = Creators.fetchStudiesBegin
const fetchStudiesSuccess = Creators.fetchStudiesSuccess;
const fetchStudiesError = Creators.fetchStudiesError;
const onAddNewStudyWithEnvironments = Creators.onAddNewStudy;
const addNewStudySubmit = Creators.onAddNewStudySubmit;
const closeModal = Creators.cancelOnAddNewStudy
const cancelOnAddNewStudy = Creators.cancelOnAddNewStudy


const getStudyData = () => {
  return async dispatch => {
    try {
      dispatch(fetchStudiesBegin());
      const res = await DataService.fetchAllStudyData();
      dispatch(fetchStudiesSuccess(res))
    }
    catch (err) {
      dispatch(fetchStudiesError(err))
      throw (err)
    }
  }
}

const sortAscendingData = (item, type) => {
  if (type === 'DECENDING') {
    return dispatch => {
      dispatch(sortByDecendingOrder(item, type))
    }
  } else {
    return dispatch => {
      dispatch(sortByAscendingOrder(item, type))
    }
  }
}

const onAddNewStudySubmit = (value, cells, panelSize, environment, media, studyType, language, history) => {
  const data = {
    name: value,
    environment_id: environment.code || '',
    media_id: media.code || '',
    study_type_id: studyType.code || '',
    language_id: language || '',
    number_of_cells: parseInt(cells) || 1,
    panel_size: parseInt(panelSize) || 100

  }
  return async dispatch => {
    try {
      dispatch(addNewStudySubmit())
      const res = await DataService.onAddNewStudySubmit(data)

      const studyId = res.data.study_id;
      history.push(`/my_studies/overview/${studyId}/cell_step_management`)

    }
    catch (error) {
      throw error;
    }
  }
}

const onAddNewStudy = () => {
  return async dispatch => {
    try {
      const results = await HttpService.getEnvironmentList()
      const mediaResults = await HttpService.getMediaList()
      const studyTypesResults = await HttpService.getStudyTypesList()
      const languageResults = await HttpService.getLanguageList()


      dispatch(onAddNewStudyWithEnvironments(results, mediaResults, studyTypesResults, languageResults))
    }

    catch (error) {
      throw error
    }
  }
}

export default {
  sortAscendingData,
  getStudyData,
  setEnvironmentFilter,
  setMediaFilter,
  toggleCompleted,
  toggleLive,
  search,
  sortByAscendingOrder,
  sortByDecendingOrder,
  fetchStudiesBegin,
  fetchStudiesSuccess,
  fetchStudiesError,
  onAddNewStudy,
  cancelOnAddNewStudy,
  onAddNewStudySubmit,
  closeModal

}
