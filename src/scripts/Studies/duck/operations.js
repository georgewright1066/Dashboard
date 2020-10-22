import Creators from './actions';
import { attentionReportOperations } from '../../AttentionReport/duck/index';
import DataService from '../../common/services/dataService';


const fetchStimSuccess = Creators.fetchStimSuccess
const fetchStudiesSuccess = Creators.fetchStudiesSuccess
const fetchStimError = Creators.fetchStimError
const fetchStimBegin = Creators.fetchStimBegin;
const clearCheckedStudies = Creators.clearCheckedStudies
const removeAllinStepRow = Creators.removeAllinStepRow
const checkAllinStepRow = Creators.checkAllinStepRow
const removeStudy = Creators.removeStudy
const addStudy = Creators.addStudy

const checkAllinStep = ({ index, studyId, cell_id, history }) => {

  return (dispatch, getState) => {
    const isolationDataState = getState().isolationData.data.data;
    const stimsInStep = isolationDataState.map(item => item.step_list[index].stimulus_list).reduce(
      (accumulator, currentValue) => [...accumulator, ...currentValue],
      []
    );

    const currentArray = (getState().isolationData.whichStudiesAreChecked);
    const stepId = isolationDataState[0].step_list[index].step_id

    stimsInStep.map(stimulus => `${cell_id}:${stepId}:${studyId}:${stimulus.stimulus_id}`)
      .forEach(item => {
        if (!currentArray.includes(item)) {
          dispatch(addStudy(item))
          dispatch(checkAllinStepRow())
        } else {
          dispatch(removeStudy(item));
          dispatch(removeAllinStepRow())
        }
      })

    dispatch(attentionReportOperations.getAttentionReportData(getState().isolationData.whichStudiesAreChecked))
    history.push(`/my_studies/overview/${studyId}/study/attention_report`)

  }

}

const fetchStudy = (payload) => {
  let payloadId = payload.id;
  return async (dispatch) => {
    try {
      dispatch(fetchStimBegin());
      const response = await DataService.fetchStudies(payloadId)
      const res = await DataService.fetchStimData(payloadId)

      // axios.post(`${URL}/studies/${payloadId}/overview`, getHeaders());
      dispatch(fetchStimSuccess(res.data))
      dispatch(fetchStudiesSuccess(response.data))
    }
    catch (error) {
      console.log(error)
      throw error

    }
  }
}



const addOrRemoveStudy = (step, cell_id, studyId, stimId) => {
  // cellId:stepId:studyId
  // This is the order
  // let key = `cell_Id${cell_id}:step_Id${step.step_id}:study_id${studyId}:stim_id${stimId}`

  let key = `${cell_id}:${step.step_id}:${studyId}:${stimId}`

  return (dispatch, getState) => {
    let currentArray = (getState().isolationData.whichStudiesAreChecked);
    if (!currentArray.includes(key)) {
      dispatch(addStudy(key))
    } else {
      dispatch(removeStudy(key));
    }
  };
}

const goToAttentionReportPage = (whichStudiesAreChecked, { history, match }) => {

  const id = match.params.id;
  return (dispatch) => {

    dispatch(attentionReportOperations.getAttentionReportData(whichStudiesAreChecked))
    history.push(`/my_studies/overview/${id}/study/attention_report`)
  }
}

const compareAllStudies = (isolationData, { history, match }) => {
  const allStims = isolationData.data.map((item, index) => {
    return item.step_list.map((data, i) => {
      return data.stimulus_list.map((item1, idx) => {
        return `${item.cell_id}:${data.step_id}:${isolationData.study_id}:${item1.stimulus_id}`

      })
    })
  }).reduce((acc, curr) => {
    acc = acc.concat(curr)
    return acc
  }, []).reduce((acc, curr) => {
    acc = acc.concat(curr)
    return acc
  }, [])

  return (dispatch, getState) => {
    const currentArray = (getState().isolationData.whichStudiesAreChecked);
    const studyId = isolationData.study_id
    dispatch(attentionReportOperations.getAttentionReportData(allStims));
    allStims.forEach(item => {
      if (!currentArray.includes(item)) {
        dispatch(addStudy(item))
      }
    })
    history.push(`/my_studies/overview/${studyId}/study/attention_report`)
  }
}



export default {
  fetchStimSuccess,
  fetchStimError,
  fetchStimBegin,
  clearCheckedStudies,
  removeAllinStepRow,
  checkAllinStepRow,
  removeStudy,
  addStudy,
  fetchStudy,
  checkAllinStep,
  addOrRemoveStudy,
  goToAttentionReportPage,
  compareAllStudies



}
